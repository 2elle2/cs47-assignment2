// This code is from the Medium article linked in the Assignment 2 spec:
// https://drive.google.com/file/d/1WUDyObPJJ8aRfrkHmpXOgW_1DbMU5t_s/edit

// themeProvider.js
import THEMES from './themes.js';
import React, { useContext } from 'react';

export const themes = THEMES;
export const theme = THEMES[1];

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {

	return (
		<ThemeContext.Provider value = {{ themes: THEMES, theme: THEMES[1] }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function withTheme(Component) {
	return props => {
		const { themes, theme } = useContext(ThemeContext);
		return <Component {...props} themes={themes} theme={theme} />;
	}
}