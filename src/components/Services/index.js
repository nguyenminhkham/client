import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-5.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Dịch vụ của chúng tôi</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Bản vẽ cơ khí</ServicesH2>
                    <ServicesP>Chúng tôi giúp giảm chi phí và tăng doanh thu tổng thể của bạn</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Thiết kế cơ khí</ServicesH2>
                    <ServicesP>Sáng tạo và bán bản vẽ của bạn thông qua nền tảng ở mọi nơi trên thế giới</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Khóa học thiết kế</ServicesH2>
                    <ServicesP>Rút ngắn thời gian trở thành kỹ sư thiết kế cơ khí chuyên  nghiệp</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
