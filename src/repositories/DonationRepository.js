import Repository from "./Repository";

const campaignId = process.env.VUE_APP_CAMPAIGN_ID;

export default {
    postDonation(donation) {
        return Repository.post(
            'donation',
            {
                customer: {
                    email: donation.email,
                    name: donation.name,
                    surname: donation.surname
                },
                amount: donation.amount,
                subscribeToNewsLetter: true,
                campaignId: campaignId,
                metaData: [
                    {
                        comment: donation.message,
                        departure: donation.departure
                    }
                ]
            }
        );
    },
    payDonation(donationId, paymentMethodNonce) {
        return Repository.post(
            'donation/' + donationId + '/pay',
            {
                paymentNonce: paymentMethodNonce,
                paymentSource: 'brain_tree'
            }
        )
    }
}
