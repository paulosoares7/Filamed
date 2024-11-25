import './styles.css'

export function VinteEOitoDeAgosto() {

    const medicines = [
        {   
            id: 1,
            description: 'Paracetamol',
            dose: '700 mg',
            img: 'https://www.drogariaminasbrasil.com.br/media/product/e7a/paracetamol-750mg-com-20-comprimidos-generico-medquimica-df1.jpg',
        },
        {   
            id: 2,
            description: 'Ibuprofeno ',
            dose: '400mg',
            img: 'https://drogariascampea.vtexassets.com/arquivos/ids/168589-800-auto?v=638149417857230000&width=800&height=auto&aspect=true',
        },
        {   
            id: 3,
            description: 'Amoxicilina',
            dose: '250mg',
            img: 'https://www.nortesulreal.com.br/ccstore/v1/images/?source=/file/v4136521571151945378/products/NSM_81244.jpg&height=100&width=100&outputFormat=JPEG',
        },
    ]
    const equipments = [
        {   
            id: 1,
            description: 'Monitor de triagem',
            img: 'https://images.tcdn.com.br/img/img_prod/1231250/monitor_de_triagem_e_sinais_vitais_e_classificacao_de_risco_3530_1_523ffa30e3ec05f56c31e15b784d76c7.jpg'
        },
        {   
            id: 2,
            description: 'Ventilador pulmonar ',
            img: 'https://cleanmedical.com.br/wp-content/uploads/2023/05/Ventilador-Pulmonar_DX3010-600x600.jpg'
        },
        {   
            id: 3,
            description: 'Aparelho de ultrassom',
            img: 'https://tecmed.com.br/imagens/informacoes/aparelho-ultrassom-profissional-sao-paulo-08.jpg'
        },
    ]
    const staffs = [
        {
            id: 1,
            description: 'Dr. Carlos Silva - Cardiologista',
            src: 'https://saudeid.com.br/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmarketplace-saudeid-blog%2F4_motivos_para_procurar_um_medico_clinico_geral_3c6a60f3af%2F4_motivos_para_procurar_um_medico_clinico_geral_3c6a60f3af.jpg&w=1920&q=75'
        },
        {
            id: 2,
            description: 'Dra. Ana Souza - Pediatra',
            src: "https://telemedicinamorsch.com.br/wp-content/uploads/2018/05/carreira-medica.jpg",
        },
        {
            id: 3,
            description: 'Enfermeira Maria Santos',
            src: 'https://img.freepik.com/fotos-gratis/enfermeira-negra-em-seu-espaco-de-trabalho_52683-100580.jpg?t=st=1732499382~exp=1732502982~hmac=27406451801c3988b90dab9d675927c9b22d3fc71bc9f03f0728ee3c9d59519b&w=740',
        },
    ]
  
  return (
    <div className="main">
      <header className="App-header">
        <h1>Hospital 28 de Agosto</h1>
        <p>Bem-vindo ao Hospital 28 de Agosto, onde cuidamos de você com excelência.</p>
      </header>

      <section className="overview">
        <h2>Sobre Nós</h2>
        <p>
          O Hospital 28 de Agosto é referência em atendimento médico em Manaus, oferecendo serviços de alta
          qualidade e uma equipe dedicada ao bem-estar dos pacientes.
        </p>
        <img
          src="https://th.bing.com/th/id/R.216aa6d135c112545578ffb4ab509fba?rik=p3tqcNE6%2bhh2TQ&pid=ImgRaw&r=0"
          alt="Hospital 28 de Agosto"
          className="hospital-image"
        />
      </section>

      <section className="inventory">
        <h2>Inventário</h2>
        <div className="inventory-list">
          <h3>Remédios</h3>
          
        <div className='medicineContainer'>
          {medicines.map(medicine => (
            <div className='medicineContainer' key={medicine.id}>
                <div className='medicineContent'>
                    <img className= 'medicineContentImage'src={medicine.img} alt={medicine.description}/>
                    <p>{medicine.description} - {medicine.dose}</p>
                </div>
            </div>
          ))}
        </div>
          <h3>Equipamentos Médicos</h3>
          <div className='equipamentContainer'>

            {equipments.map(equipment =>(

                <div key={equipment.id}>
                    <img className= 'equipamentContent'src={equipment.img} alt={equipment.description}/>
                    <p>{equipment.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="staff">
        <h2>Equipe</h2>
        <div className="staff-list">

          {staffs.map(staff => (
            <div key={staff.id} className="staff-member">
                <img className='imgStaff' src={staff.src} alt={staff.description} />
                <p>{staff.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Hospital 28 de Agosto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

