import React, { useState, useMemo  } from 'react'
import { Background, Welcome, Image, WelcomeText, BodySection, SettingText, Text,
    SectionIn, Left, Right, Table,TableHead, TableBody, InputText, RelativeSection,
    StarImage, InputRadio, SectionRight, A, InputCheck, SaveBtn  } from './seller_indexElement'
import src_img from '../../images/SampleForumAvatar.gif'
import starrequire from '../../images/PaymentRequire.png'
import Select from 'react-select'
import Countries from '../../data/countries.json'
import Payment from '../../data/payment.json'

const SellerIndex = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = Countries
    const payment = Payment
    const styles = {
        option: (provided, state) => ({
            ...provided,
            color: "#454545",
            fontSize: '14px'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#454545',
            fontSize: '14px'
        })
    };

    const stylespm = {
        indicatorsContainer: () => ({
            margin: '-8px 0 0 0'
        }),
        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#9e9e9e',
            minHeight: '26px',
            height: '26px',
            boxShadow: state.isFocused ? null : null,
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: '30px',
            padding: '0 6px'
        }),
        input: (provided, state) => ({
            ...provided,
            margin: '0px',
        }),
        option: (provided, state) => ({
            ...provided,
            color: "#454545",
            fontSize: '14px'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#454545',
            fontSize: '14px',
            margin: '-8px 0 0 0'
        })
    };

return (
    <>  
    <Background />
        <Welcome>
            <Image src={src_img}/>
            <WelcomeText>Ch??o m???ng</WelcomeText>
        </Welcome>
        <BodySection>
            <SectionIn>
                <SettingText>Thi???t l???p t??i kho???n thi???t k???</SettingText>
            </SectionIn>
            <SectionIn>
                <Text className='bold'>CH?? ??:</Text>
                <Text>  N???u b???n th???c hi???n c??c thay ?????i ?????i v???i th??ng tin thanh to??n c???a m??nh, th?? c?? kh??? n??ng b???n s??? kh??ng ???????c thanh to??n cho ?????n chu k??? thanh to??n ti???p theo.
V?? d???: ?????i v???i th??ng tin thanh to??n ???????c thay ?????i v??o ng??y 15 th??ng 1, b???n c?? th??? kh??ng nh???n ???????c ti???n b???n quy???n c???a m??nh cho ?????n ng??y 1 th??ng 3.</Text>
            </SectionIn>
            <SectionIn className='greenbk'>
                <Text className='bold'>Ch??o m???ng b???n ?????n v???i c???ng ?????ng thi???t k??? Tmaster! </Text>
                <Text>?????m b???o ??i???n th??ng tin b??n d?????i ????? truy c???p c??c c??ng c??? xu???t b???n c???a b???n v?? b???t ?????u b??n tr??n Banvecokhi.com ngay h??m nay.</Text>
            </SectionIn>
            <SectionIn className='flex'>
                <Left>
                    <Table>
                        <TableHead>
                            <Left>
                                <Text className='headtext'>T??i kho???n</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <RelativeSection>
                                <InputText type='text' placeholder='T??n ????ng nh???p'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                        </TableBody>
                    </Table>
                    <Table className='margin-top'>
                        <TableHead>
                            <Left>
                                <Text className='headtext'>?????a ch???</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <RelativeSection>
                                <InputText type='text' placeholder='H??? t??n'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='T??n c??ng ty'></InputText>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='?????a ch??? 1'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='?????a ch??? 2'></InputText>
                            </RelativeSection>
                            <RelativeSection>
                                <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                styles={styles}
                                defaultValue={{ label: 'Viet Nam', value: 'VN' }}
                                />
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='Th??nh ph???'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='M?? Postal'></InputText>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='S??? ??i???n tho???i'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                        </TableBody>
                    </Table>
                    <Table className='right margin-top'>
                    <TableHead>
                                <Text className='headtext'>Th???a Thu???n C???p Ph??p</Text>
                        </TableHead>
                        <TableBody>
                        <Text className='headtext'>Th???a Thu???n C???p Ph??p B???t Bu???c:</Text>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e1' value={1}/>
                                <Text className='email-check'>T??i ???? ?????c, hi???u v?? ?????ng ?? v???i Th???a thu???n Nh?? xu???t b???n</Text>
                            </SectionRight>
                        <Text className='headtext'>C??c Th???a Thu???n Th????ng Hi???u T??y Ch???n:</Text>
                        <SectionRight className='smallts mrbottom mrt' >
                                <Text className='small'>Tmaster cung c???p </Text>
                                <A className='small' href='#'> D???ch v??? Qu???n l?? Th????ng hi???u K??? thu???t s??? </A>
                                <Text className='small'>cho m???t s??? c??ng ty. ????? xu???t b???n c??c m?? h??nh 3D bao g???m c??c th????ng hi???u n??y, b???n ph???i ?????ng ?? v???i m???t th???a thu???n ?????c bi???t. C??ng c?? th??? c?? c??c quy tr??nh duy nh???t v?? ph??n ph???i ti???n b???n quy???n li??n quan ?????n c??c th???a thu???n n??y.</Text>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e2' value={2}/>
                                <Text className='email-check'>T??i ???? ?????c, hi???u v?? ?????ng ?? v???i </Text>
                                <A>Th???a thu???n ngh??? s?? Ford </A>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e3' value={3}/>
                                <Text className='email-check'>T??i ???? ?????c, hi???u v?? ?????ng ?? v???i </Text>
                                <A>Th???a thu???n v??? ngh??? s?? General Motors </A>
                                <Text className='small'>(Y??u c???u nh???n d???ng c?? nh??n) *</Text>
                            </SectionRight>
                            <SectionRight className='mrt mrbottom'>
                                <InputCheck type='checkbox' name='e4' value={4}/>
                                <Text className='email-check'>T??i ???? ?????c, hi???u v?? ?????ng ?? v???i </Text>
                                <A>Th???a thu???n v??? ngh??? s?? Saleen</A>
                            </SectionRight>
                        </TableBody>
                    </Table>
                </Left>
                <Right>
                    <Table className='right'>
                    <TableHead>
                            <Left>
                                <Text className='headtext'>Th??ng tin thanh to??n</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <SectionRight>
                                <Text className='payment-option'>PH????NG TH???C THANH TO??N</Text>
                            </SectionRight>
                            <SectionRight>
                                <InputRadio type='radio' checked='checked'/>
                                <Text className='marginleft'>Paypal</Text>
                            </SectionRight>
                            <RelativeSection>
                                <InputText type='text' placeholder='Email T??i Kho???n Paypal'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <SectionRight>
                                <Text >THANH TO??N KHI:</Text>
                            </SectionRight>
                            <RelativeSection className='paymentsection'>
                                <Select className='selectpayment'
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={payment}
                                styles={stylespm}
                                defaultValue={{ label: '??t nh???t 100.000 VND', value: '100' }}
                                />
                                <StarImage src={starrequire} className='starpayment'/>
                            </RelativeSection>
                            <SectionRight className='smallts mrbottom' >
                                <Text className='small'>S??? d?? t??i kho???n c???a b???n ???????c thanh to??n h??ng th??ng v??o ng??y l??m vi???c ?????u ti??n c???a th??ng. N???u l???n ?????u ti??n v??o cu???i tu???n ho???c ng??y l???, b???n s??? ???????c thanh to??n v??o ng??y l??m vi???c ti???p theo.</Text>
                                <A href='#'> Xem c?? s??? ki???n th???c</A>
                            </SectionRight>
                        </TableBody>
                    </Table>
                    <Table className='right margin-top'>
                    <TableHead>
                            <Left>
                                <Text className='headtext'>????ng k?? Email</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <SectionRight className='mrt margin-top'>
                                <InputCheck type='checkbox' name='e1' value={1}/>
                                <Text className='email-check'>Nh???n tin t???c v?? c???p nh???t trang Tmaster</Text>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e2' value={2}/>
                                <Text className='email-check'>Nh???n tin t???c v?? th??ng tin cho c??c k??? s??</Text>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e3' value={3}/>
                                <Text className='email-check'>Nh???n th??ng b??o giao d???ch</Text>
                            </SectionRight>
                            <SectionRight className='mrt mrbottom'>
                                <InputCheck type='checkbox' name='e4' value={4}/>
                                <Text className='email-check'>Nh???n th??ng b??o v??? ch????ng tr??nh khuy???n m??i v?? b??n h??ng c???a Tmaster</Text>
                            </SectionRight>
                        </TableBody>
                    </Table>
                </Right>
            </SectionIn>
            <SectionIn className='flex mrbtn'>
                <SaveBtn className='margin-top'>L??u Th??ng Tin Thi???t L???p</SaveBtn>
            </SectionIn>
        </BodySection>
    </>
)
}

export default SellerIndex