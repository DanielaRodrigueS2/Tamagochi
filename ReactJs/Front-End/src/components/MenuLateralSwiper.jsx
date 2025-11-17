import {Swiper, SwiperSlide} from 'swiper/react'
import './MenuLateralSwiper.css'
import 'swiper/css'
import {Grid, Pagination} from 'swiper/modules'

function MenuLateralSwiper(props){
    
    console.log('Itens recebidos: ', props.itens);
    
    return(
        <Swiper 
            centeredSlides={false}
            centerInsufficientSlides={true}
            spaceBetween={20} 
            direction='vertical' 
            slidesPerGroup={3} 
            grid={{
                rows: 1,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Grid, Pagination]}
            className='Swipper'
        
        >
            
            {props.itens.map((item) => (
                <SwiperSlide key={item._id} onClick={() => pass} className='SwiperSlideMenu'>
                    <img src={`/Itens/${item.tipo}/${item.sprite}`} alt={item.nome} className='imagem'/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MenuLateralSwiper