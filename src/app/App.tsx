import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Header} from '@/common/components/Header/Header.tsx';
import {selectThemeMode} from '@/app/app-selectors.ts';
import {getTheme} from '@/common/theme/theme.ts';
import {Main} from '@/common/components/Main/Main.tsx';
import {useAppSelector} from '@/common/hooks/useAppSelector.ts';

export const App = () => {

    const themeMode = useAppSelector(selectThemeMode)

    const theme = getTheme(themeMode)

    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header/>
                <Main/>
            </ThemeProvider>
        </div>
    );
};

