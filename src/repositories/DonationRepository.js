import Repository from "./Repository";

export default {
    postDonation(donation) {
        return Repository.post(
            'donation',
            {
                customer: {
                    email: donation.email,
                    name: donation.name,
                    surname: donation.surname,
                    mobile: donation.mobile,
                    address: donation.address,
                    locality: donation.locality
                },
                amount: donation.amount,
                subscribeToNewsLetter: donation.subscribeToNewsLetter
            }
        );
    },
    payDonation(donationId, paymentMethodNonce) {
        return Repository.post(
            'donation/' + donationId + '/pay',
            {
                payment_method_nonce: paymentMethodNonce,
                paymentSource: 'brain_tree'
            }
        )
    }
}
