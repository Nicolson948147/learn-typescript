import { CITY_URL } from '../constants/api';
import { City, ListResponse } from '../models';
import axiosClient from './axiosClient';

const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    return axiosClient.get(CITY_URL, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;
