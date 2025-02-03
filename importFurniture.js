import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { get } from 'https';

function fetchData(url) {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

function formatProductForSanity(product) {
    return {
        _type: "product",
        title: product.title,
        description: product.description,
        price: product.price,
        tags: product.tags,
        discountPercentage: product.dicountPercentage,
        isNew: product.isNew,
        imageUrl: product.imageUrl
    };
}

async function main() {
    try {
        console.log('Fetching products...');
        const products = await fetchData('https://template6-six.vercel.app/api/products');
        const formattedProducts = products.map(formatProductForSanity);
        
        if (!existsSync('./src/sanity/data')) {
            mkdirSync('./src/sanity/data', { recursive: true });
        }
        
        const ndjsonData = formattedProducts.map(p => JSON.stringify(p)).join('\n');
        writeFileSync('./src/sanity/data/furniture.ndjson', ndjsonData);
        
        console.log('Done! Now run:');
        console.log('sanity dataset import ./src/sanity/data/furniture.ndjson production');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
