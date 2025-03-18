import React from "react";

function Cards() {
    const cardData = [
        { 
            title: "Playas Paradisiacas", 
            text: "Relajate y disfruta de las mejores playas cristalinas...", 
            image: "https://th.bing.com/th/id/R.e2182a4447363703b9499033e48dbb22?rik=%2fBFIXBj0JwG4eA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-lL9pBbMQ1RE%2fU-TlMBtAbpI%2fAAAAAAACRQQ%2f0bwZOoVTXls%2fs1600%2ffotos%2bde%2bplayas%2c%2bagua%2bazul%2by%2barenas%2bblancas%2bamazing%2band%2bexotic%2bbeaches%2bblue%2bsea%2b(4).jpg&ehk=BK3galTTYzfa6iQPdmtPw8A%2fLkDNonxeg56TMXQWRys%3d&risl=&pid=ImgRaw&r=0"
        },
        { 
            title: "Aventura En la Montaña", 
            text: "Atraviesa la selva bañate en las mejores cascadas.....", 
            image: "https://www.renovablesverdes.com/wp-content/uploads/2021/04/ecosistemas-de-agua-dulce-1.jpg" 
        },
        { 
            title: "Expediciones Al desierto", 
            text: "Descubre los atardeceres junto a las dunas.....", 
            image: "https://capasdelatierra.win/wp-content/uploads/vasto-desierto-azotado-viento-dunas-arena-moviles-sol-abrasador-capturado-imagen-hiperrealista_968529-18459.jpg" 
        }
    ];

    return (
        <div className="row mt-5">
            {cardData.map((card, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card">
                        <img src={card.image} className="card-img-top" alt={card.title} />
                        <div className="card-body text-center">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.text}</p>
                            <a href="#" className="btn btn-primary">Saber Más</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}



export default Cards;