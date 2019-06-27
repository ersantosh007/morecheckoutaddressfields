var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-billing-address': {
                'Naqel_ExtraCheckoutAddressFields/js/action/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Naqel_ExtraCheckoutAddressFields/js/action/set-shipping-information-mixin': true
            },
            'Magento_Checkout/js/action/create-shipping-address': {
                'Naqel_ExtraCheckoutAddressFields/js/action/create-shipping-address-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Naqel_ExtraCheckoutAddressFields/js/action/set-billing-address-mixin': true
            },
            'Magento_Checkout/js/action/create-billing-address': {
                'Naqel_ExtraCheckoutAddressFields/js/action/set-billing-address-mixin': true
            }
        }
    }
};