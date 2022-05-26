import { STUDENT_URL } from '../constants/api';
import { ListParams, ListResponse, Student } from '../models';
import axiosClient from './axiosClient';

const studentAPi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    return axiosClient.get(STUDENT_URL, { params });
  },
  getById(id: string): Promise<Student> {
    return axiosClient.get(`${STUDENT_URL}/${id}`);
  },
  add(data: Student): Promise<Student> {
    return axiosClient.post(STUDENT_URL, data);
  },
  update(data: Student): Promise<Student> {
    return axiosClient.patch(STUDENT_URL, data);
  },
  remove(id: string): Promise<any> {
    return axiosClient.delete(`${STUDENT_URL}/${id}`);
  },
};

export default studentAPi;
