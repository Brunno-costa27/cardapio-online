export function ProductList({products}) {

    const handleBuy = (product) => {
        const message = `Olá, gostaria de comprar o seguinte produto: ${product.name}`;
        const phone = '5584996492087'; // Coloque o número de telefone do estabelecimento aqui
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cardápio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="font-bold">{product.price}</p>
                        <button
                            onClick={() => handleBuy(product)}
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Comprar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}