import ApiRequest from '../index'
import {accessTokenKey} from '../../constants/localstorage'
import {priceApi} from '../service.config'

const PriceService = () => {
    const getPriceWithProductIds = async (product_ids = []) => {
        const accessToken = localStorage.getItem(accessTokenKey)
        const headers = {
            'X-Version': 'v2',
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
        let data = {
            'items': []
        }
        product_ids.map((id) => {
            data['items'].push({
                'itemId': {
                    'itemType': 'PRODUCT',
                    'includesTax': false,
                    'id': id
                },
                "quantity": {
                    "quantity": 1
                }
            });
        })
        const res = await ApiRequest(priceApi(), 'post',data, headers)
        return res.data
    }
    return {
        getPriceWithProductIds
    }
}

export default PriceService()