// This code is heavily adapted from the Medium article linked in the Assignment 2 spec:
// https://drive.google.com/file/d/1WUDyObPJJ8aRfrkHmpXOgW_1DbMU5t_s/edit

// themeProvider.js
import THEMES from './themes.js';
import React, { useContext, useState } from 'react';

export const themes = THEMES;
export const theme = Themes.light;

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
	const [themeID, setThemeID] = useState(Themes.light);

	return (
		<ThemeContext.Provider value = {{ themeID, setThemeID }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function withTheme(Component) {
 return props => {
	 const { themeID, setThemeID } = useContext(ThemeContext);

	 const getTheme = themeID => THEMES.find(theme => theme === themeID);
	 const setTheme = themeID => setThemeID(themeID);

	 return (
		 <Component
		 {...props}
		 themes={THEMES}
		 theme={getTheme(themeID)}
		 setTheme={setTheme}
		 />
	 );
 };
}