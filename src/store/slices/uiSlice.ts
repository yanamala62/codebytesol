import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type DropdownKey = 'services' | 'industries' | 'resources' | 'company' | null;

interface UIState {
  isMobileMenuOpen: boolean;
  activeDropdown: DropdownKey;
  useCasesIndex: number;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  activeDropdown: null,
  useCasesIndex: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu:  (state) => { state.isMobileMenuOpen = !state.isMobileMenuOpen; },
    closeMobileMenu:   (state) => { state.isMobileMenuOpen = false; },
    setActiveDropdown: (state, action: PayloadAction<DropdownKey>) => { state.activeDropdown = action.payload; },
    setUseCasesIndex:  (state, action: PayloadAction<number>)      => { state.useCasesIndex = action.payload; },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setActiveDropdown, setUseCasesIndex } = uiSlice.actions;
export default uiSlice.reducer;
