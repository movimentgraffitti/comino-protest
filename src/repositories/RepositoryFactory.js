import DonationRepository from "./DonationRepository";
import CampaignRepository from "@/repositories/CampaignRepository";

const repositories = {
    donation: DonationRepository,
    campaign: CampaignRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
