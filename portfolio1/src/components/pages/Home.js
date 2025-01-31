import Card from '../Cards.js';

function Home() {
    return (
        <div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Card 
                title="Sample Card 1"
                content="This is some sample content for the first card."
            />
            <Card 
                title="Sample Card 2"
                content="This is some sample content for the second card."
            />
        
        </div>
        </div>
    );
}

export default Home;