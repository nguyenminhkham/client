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
            <WelcomeText>Chào mừng</WelcomeText>
        </Welcome>
        <BodySection>
            <SectionIn>
                <SettingText>Thiết lập tài khoản thiết kế</SettingText>
            </SectionIn>
            <SectionIn>
                <Text className='bold'>CHÚ Ý:</Text>
                <Text>  Nếu bạn thực hiện các thay đổi đối với thông tin thanh toán của mình, thì có khả năng bạn sẽ không được thanh toán cho đến chu kỳ thanh toán tiếp theo.
Ví dụ: Đối với thông tin thanh toán được thay đổi vào ngày 15 tháng 1, bạn có thể không nhận được tiền bản quyền của mình cho đến ngày 1 tháng 3.</Text>
            </SectionIn>
            <SectionIn className='greenbk'>
                <Text className='bold'>Chào mừng bạn đến với cộng đồng thiết kế Tmaster! </Text>
                <Text>Đảm bảo điền thông tin bên dưới để truy cập các công cụ xuất bản của bạn và bắt đầu bán trên Banvecokhi.com ngay hôm nay.</Text>
            </SectionIn>
            <SectionIn className='flex'>
                <Left>
                    <Table>
                        <TableHead>
                            <Left>
                                <Text className='headtext'>Tài khoản</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <RelativeSection>
                                <InputText type='text' placeholder='Tên đăng nhập'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                        </TableBody>
                    </Table>
                    <Table className='margin-top'>
                        <TableHead>
                            <Left>
                                <Text className='headtext'>Địa chỉ</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <RelativeSection>
                                <InputText type='text' placeholder='Họ tên'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='Tên công ty'></InputText>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='Địa chỉ 1'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='Địa chỉ 2'></InputText>
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
                                <InputText type='text' placeholder='Thành phố'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='Mã Postal'></InputText>
                            </RelativeSection>
                            <RelativeSection>
                                <InputText type='text' placeholder='Số điện thoại'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                        </TableBody>
                    </Table>
                    <Table className='right margin-top'>
                    <TableHead>
                                <Text className='headtext'>Thỏa Thuận Cấp Phép</Text>
                        </TableHead>
                        <TableBody>
                        <Text className='headtext'>Thỏa Thuận Cấp Phép Bắt Buộc:</Text>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e1' value={1}/>
                                <Text className='email-check'>Tôi đã đọc, hiểu và đồng ý với Thỏa thuận Nhà xuất bản</Text>
                            </SectionRight>
                        <Text className='headtext'>Các Thỏa Thuận Thương Hiệu Tùy Chọn:</Text>
                        <SectionRight className='smallts mrbottom mrt' >
                                <Text className='small'>Tmaster cung cấp </Text>
                                <A className='small' href='#'> Dịch vụ Quản lý Thương hiệu Kỹ thuật số </A>
                                <Text className='small'>cho một số công ty. Để xuất bản các mô hình 3D bao gồm các thương hiệu này, bạn phải đồng ý với một thỏa thuận đặc biệt. Cũng có thể có các quy trình duy nhất và phân phối tiền bản quyền liên quan đến các thỏa thuận này.</Text>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e2' value={2}/>
                                <Text className='email-check'>Tôi đã đọc, hiểu và đồng ý với </Text>
                                <A>Thỏa thuận nghệ sĩ Ford </A>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e3' value={3}/>
                                <Text className='email-check'>Tôi đã đọc, hiểu và đồng ý với </Text>
                                <A>Thỏa thuận về nghệ sĩ General Motors </A>
                                <Text className='small'>(Yêu cầu nhận dạng cá nhân) *</Text>
                            </SectionRight>
                            <SectionRight className='mrt mrbottom'>
                                <InputCheck type='checkbox' name='e4' value={4}/>
                                <Text className='email-check'>Tôi đã đọc, hiểu và đồng ý với </Text>
                                <A>Thỏa thuận về nghệ sĩ Saleen</A>
                            </SectionRight>
                        </TableBody>
                    </Table>
                </Left>
                <Right>
                    <Table className='right'>
                    <TableHead>
                            <Left>
                                <Text className='headtext'>Thông tin thanh toán</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <SectionRight>
                                <Text className='payment-option'>PHƯƠNG THỨC THANH TOÁN</Text>
                            </SectionRight>
                            <SectionRight>
                                <InputRadio type='radio' checked='checked'/>
                                <Text className='marginleft'>Paypal</Text>
                            </SectionRight>
                            <RelativeSection>
                                <InputText type='text' placeholder='Email Tài Khoản Paypal'></InputText>
                                <StarImage src={starrequire}/>
                            </RelativeSection>
                            <SectionRight>
                                <Text >THANH TOÁN KHI:</Text>
                            </SectionRight>
                            <RelativeSection className='paymentsection'>
                                <Select className='selectpayment'
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={payment}
                                styles={stylespm}
                                defaultValue={{ label: 'Ít nhất 100.000 VND', value: '100' }}
                                />
                                <StarImage src={starrequire} className='starpayment'/>
                            </RelativeSection>
                            <SectionRight className='smallts mrbottom' >
                                <Text className='small'>Số dư tài khoản của bạn được thanh toán hàng tháng vào ngày làm việc đầu tiên của tháng. Nếu lần đầu tiên vào cuối tuần hoặc ngày lễ, bạn sẽ được thanh toán vào ngày làm việc tiếp theo.</Text>
                                <A href='#'> Xem cơ sở kiến thức</A>
                            </SectionRight>
                        </TableBody>
                    </Table>
                    <Table className='right margin-top'>
                    <TableHead>
                            <Left>
                                <Text className='headtext'>Đăng ký Email</Text>
                            </Left>
                            <Right></Right>
                        </TableHead>
                        <TableBody>
                            <SectionRight className='mrt margin-top'>
                                <InputCheck type='checkbox' name='e1' value={1}/>
                                <Text className='email-check'>Nhận tin tức và cập nhật trang Tmaster</Text>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e2' value={2}/>
                                <Text className='email-check'>Nhận tin tức và thông tin cho các kỹ sư</Text>
                            </SectionRight>
                            <SectionRight className='mrt'>
                                <InputCheck type='checkbox' name='e3' value={3}/>
                                <Text className='email-check'>Nhận thông báo giao dịch</Text>
                            </SectionRight>
                            <SectionRight className='mrt mrbottom'>
                                <InputCheck type='checkbox' name='e4' value={4}/>
                                <Text className='email-check'>Nhận thông báo về chương trình khuyến mãi và bán hàng của Tmaster</Text>
                            </SectionRight>
                        </TableBody>
                    </Table>
                </Right>
            </SectionIn>
            <SectionIn className='flex mrbtn'>
                <SaveBtn className='margin-top'>Lưu Thông Tin Thiết Lập</SaveBtn>
            </SectionIn>
        </BodySection>
    </>
)
}

export default SellerIndex