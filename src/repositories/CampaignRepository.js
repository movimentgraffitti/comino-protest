import Repository from "./Repository";

const campaignId = process.env.VUE_APP_CAMPAIGN_ID;

export default {
    getCampaignStats() {
        return Repository.get(
            'campaign/' + campaignId + '/stats'
        );
    },
}
