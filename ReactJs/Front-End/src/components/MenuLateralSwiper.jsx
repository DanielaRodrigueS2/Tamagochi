import {Swiper, SwiperSlide} from 'swiper/react'
import './MenuLateralSwiper.css'
import 'swiper/css'
import {Grid, Pagination} from 'swiper/modules'

function MenuLateralSwiper(props){
    return(
        <Swiper 
            spaceBetween={20} 
            direction='vertical' 
            slidesPerGroup={3} 
            grid={{
                rows: 2,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Grid, Pagination]}
            className='Swipper'
        
        >
            
            {props.itens.map((item) => (
                <SwiperSlide key={item.id} onClick={() => pass}>
                    <img src={item.sprite} alt={item.nome} className='imagem'/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MenuLateralSwiper