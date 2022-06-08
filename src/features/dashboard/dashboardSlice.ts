import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Student } from 'models';

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}

export interface RankingByCityList {
  cityId: string;
  rankingList: Array<Student>;
}

export interface DashBoardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highestStudentList: Array<Student>;
  lowestStudentList: Array<Student>;
  rankingByCityList: Array<RankingByCityList>;
}

const initialState: DashBoardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailed(state) {
      state.loading = false;
    },
    setStatistic(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload;
    },
    setHighestStudentList(state, action: PayloadAction<Student[]>) {
      state.highestStudentList = action.payload;
    },
    setLowestStudentList(state, action: PayloadAction<Student[]>) {
      state.lowestStudentList = action.payload;
    },
    setRankingList(state, action: PayloadAction<RankingByCityList[]>) {
      state.rankingByCityList = action.payload;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selector
export const getDashboardStatistic = (state: RootState) => state.dashboard.statistics;
export const getDashboardLoading = (state: RootState) => state.dashboard.loading;
export const getHighestStudentList = (state: RootState) => state.dashboard.highestStudentList;
export const getLowestStudentList = (state: RootState) => state.dashboard.lowestStudentList;
export const getRankingList = (state: RootState) => state.dashboard.rankingByCityList;

// Reducers
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
