import DonationRepository from "./DonationRepository";

const repositories = {
    donation: DonationRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
