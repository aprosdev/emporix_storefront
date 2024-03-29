import { Container } from '../../components/Utilities/common'
import React  from 'react'
import {TextRegular5, Heading3} from '../../components/Utilities/typography'
const AccountSubTitle = ({title, detail}) => {
    return (
        <Container className="font-inter font-bold text-2xl text-[#214559] pb-6 border-b border-[#D7DADE]">
            <Heading3>{title} &nbsp;</Heading3>
            { 
                detail !== undefined?
                    <TextRegular5 className="text-[#214559]">{detail}</TextRegular5>:<></>
            }
        </Container>
    )
}

export default AccountSubTitle