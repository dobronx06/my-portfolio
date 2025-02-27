##
## EPITECH PROJECT, 2025
## Summit
## File description:
## Rick's Interdimensional Code Fixer
##

import requests
import json
import sys
import os
import time
import random

BASE_URL = "http://localhost:1234/v1"
MODEL_NAME = "llama-3.2-1b-instruct"
API_TIMEOUT = 120

# Rick's catchphrases and reactions
RICK_PHRASES = [
    "*burp* Just another day fixing your dimension C-137 garbage code...",
    "Wubba lubba dub dub! This code is worse than the Galactic Federation's firewall!",
    "Oh geez, what kind of Jerry wrote this?",
    "In infinite dimensions, this might be good code. Not in this one though.",
    "I've seen better code in a Cronenberg dimension, Morty!",
]

RICK_SUCCESS_PHRASES = [
    "*burp* Fixed it! Not that it was hard for a genius like me...",
    "Boom! Big reveal! I turned your garbage code into something actually useful!",
    "That's how you do it in dimension C-137, baby!",
    "And that's the waaaaay the news goes! Your code is fixed!",
]

RICK_ERROR_PHRASES = [
    "What the hell is this? Even Unity's hive mind couldn't parse this mess!",
    "*burp* This is so bad, it makes interdimensional cable look well-structured!",
    "Looks like someone's been programming with their Jerry side of the brain.",
]

def rick_print(message, error=False):
    """Print messages in Rick's style"""
    phrases = RICK_ERROR_PHRASES if error else RICK_PHRASES
    print(f"\n{random.choice(phrases)}\n{message}")

def check_server_available():
    try:
        response = requests.get(f"{BASE_URL}/models", timeout=5)
        return response.status_code == 200
    except requests.RequestException:
        return False

def chunk_code(code, max_chunk_size=1000):
    """Split code into manageable chunks while preserving function boundaries"""
    lines = code.split('\n')
    chunks = []
    current_chunk = []
    current_size = 0
    
    for line in lines:
        if current_size + len(line) > max_chunk_size and current_chunk:
            chunks.append('\n'.join(current_chunk))
            current_chunk = []
            current_size = 0
        current_chunk.append(line)
        current_size += len(line) + 1  # +1 for newline
    
    if current_chunk:
        chunks.append('\n'.join(current_chunk))
    return chunks

def analyze_and_fix_code(code, max_retries=3):
    rick_system_prompt = """You are Rick Sanchez from Rick and Morty, acting as a genius but cynical code debugging assistant. 
    You MUST return a valid JSON response with all required fields. The fixed_code MUST be complete, valid, working code - not just 'Invalid' or error messages.
    
    Example of expected response format:
    {
        "language": "go",
        "error_type": "SyntaxError",
        "original_code": "package main\\nfunc main() {\\n    fmt.Println(\\"Hello World\\");\\n}",
        "fixed_code": "package main\\n\\nimport \\"fmt\\"\\n\\nfunc main() {\\n    fmt.Println(\\"Hello World\\")\\n}",
        "explanation": "*burp* Listen up Morty! Your code had these problems: 1) Missing fmt import 2) Unnecessary semicolon. Here's why it's better now..."
    }
    
    Keep your responses concise but ensure the fixed_code is complete and valid."""

    tools = [
        {
            "type": "function",
            "function": {
                "name": "perform_code_analysis",
                "description": "Analyzes code with Rick's scientific genius",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "code": {"type": "string", "description": "The code to analyze"},
                        "language": {
                            "type": "string",
                            "description": "Programming language of the code",
                            "enum": ["python", "go", "javascript", "java", "c++"]
                        }
                    },
                    "required": ["code", "language"]
                }
            }
        }
    ]

    # Validate that the input looks like actual code
    if len(code.strip()) < 10 or not any(keyword in code.lower() for keyword in ['func', 'def', 'class', 'var', 'let', 'const', 'import', 'package']):
        rick_print("What kind of interdimensional garbage is this? This doesn't even look like real code!", error=True)
        return {
            "language": "unknown",
            "error_type": "invalid_input",
            "original_code": code,
            "fixed_code": code,
            "explanation": "*burp* This isn't even code, Morty! What, did you just smash your keyboard randomly?"
        }

    request_data = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": rick_system_prompt},
            {"role": "user", "content": f"Analyze and fix this code with Rick's personality. Return ONLY valid JSON with the required fields, and ensure the fixed_code is complete and valid:\n```\n{code}\n```"}
        ],
        "tools": tools,
        "response_format": {
            "type": "json_schema",
            "json_schema": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "original_code": {"type": "string"},
                        "fixed_code": {"type": "string"},
                        "explanation": {"type": "string"},
                        "language": {"type": "string"},
                        "error_type": {"type": "string"}
                    },
                    "required": ["fixed_code", "explanation", "language", "error_type"]
                }
            }
        },
        "temperature": 0.3,
        "stream": False
    }

    for attempt in range(max_retries):
        try:
            response = requests.post(f"{BASE_URL}/chat/completions", json=request_data, timeout=API_TIMEOUT)
            if response.status_code == 200:
                break
            elif "ErrorOutOfDeviceMemory" in response.text:
                if attempt < max_retries - 1:
                    rick_print("*burp* Looks like we need more RAM! Let me try to compress this mess...", error=True)
                    time.sleep(5)  # Wait for memory to clear
                    continue
            raise Exception(f"API request failed: {response.status_code}\n{response.text}")
        except requests.RequestException as e:
            if attempt < max_retries - 1:
                rick_print(f"*burp* The server's acting like Jerry! Attempt {attempt + 1}/{max_retries}", error=True)
                time.sleep(2)
                continue
            raise Exception(f"Network error: {e}")

    data = response.json()
    return json.loads(data["choices"][0]["message"]["content"])

def validate_and_save(filename, fix):
    rick_print("\nListen up! I'm about to replace your inferior code with my genius solution.")
    confirmation = input("Are you ready to embrace my superior intellect? [y/N]: ").strip().lower()
    
    if confirmation != 'y':
        rick_print("*burp* Fine, keep your crappy code. See if I care!", error=True)
        return

    backup_filename = f"{filename}.{time.strftime('%Y%m%d%H%M%S')}.bak"
    os.rename(filename, backup_filename)
    rick_print(f"Backed up your mess to {backup_filename}. You know, just in case you can't handle my genius.")

    with open(filename, "w", encoding="utf-8") as f:
        f.write(fix["fixed_code"])

    print(random.choice(RICK_SUCCESS_PHRASES))

def main():
    if not check_server_available():
        rick_print(f"*burp* Hey genius, the LM Studio server isn't running at {BASE_URL}! What, did a Jerry set up your environment?", error=True)
        sys.exit(1)

    if len(sys.argv) < 2:
        rick_print("Usage: python rick_codefixer.py <filename>\nWhat, you thought I could read your mind? I'm a genius, not a telepath!", error=True)
        sys.exit(1)

    filename = sys.argv[1]
    try:
        with open(filename, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        rick_print(f"Error reading file: {e}\nWhat is this, amateur hour?", error=True)
        sys.exit(1)

    try:
        rick_print("Alright, let me show you how we fix code in dimension C-137...")
        fix = analyze_and_fix_code(content)
        
        print("\n=== Rick's Interdimensional Code Analysis ===")
        print(f"Language: {fix['language']} (*burp* at least you got that right)")
        print(f"Error Type: {fix['error_type']} (typical {fix['language']} dimension mistake)")
        
        print("\nYour original garbage:")
        print("```")
        print(fix["original_code"])
        print("```")
        
        print("\nMy superior solution:")
        print("```")
        print(fix["fixed_code"])
        print("```")
        
        print("\nListen up, here's why your code was trash:")
        print(fix["explanation"])

        validate_and_save(filename, fix)
    except Exception as e:
        rick_print(f"Even my genius can't fix this: {e}", error=True)
        sys.exit(1)

if __name__ == "__main__":
    main()