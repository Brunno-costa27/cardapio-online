export const handleBuy = (e) => {
    // console.log(product)

    // const message = `Olá, gostaria de comprar o seguinte produto: ${product}`;
    const message = `
    Olá! Gostaria de fazer um pedido.
    Aqui está o produto que desejo:

    🍕 *Produto: ${product.title};
    📝 *Descrição: ${product.description};
    🔢 *Quantidade: ${product.quantity};
    📏 *Tamanho: ${product.size};

    ℹ️ Por favor, informe o tempo estimado de entrega e o valor total.
    
    😊 Muito obrigado!`
        ;
    const phone = '5584996492087'; // Coloque o número de telefone do estabelecimento aqui
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

