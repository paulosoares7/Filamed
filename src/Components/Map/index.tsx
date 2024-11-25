import { SimpleMap } from "../MapComponent";

export function Map(){
    return (
        <section className="containerMap" id="mapa">
             <div className="contactMap">
                <SimpleMap/>
            </div>
            <div className="contactMap">
                <h2>Encontre o Hospital Mais Próximo</h2>
                <p>Com a geolocalização do seu dispositivo, podemos ajudá-lo a encontrar rapidamente o hospital mais próximo para atender às suas necessidades de saúde. Basta clicar no botão abaixo e ser direcionado ao Google Maps!</p>
                <p>O FILAMED garante a você um atendimento ágil, com base na proximidade e nas condições dos hospitais em tempo real.</p>
            </div>
           
        </section>
    )
}