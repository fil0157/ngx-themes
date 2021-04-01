// Angular
import { TestBed, getTestBed, inject } from '@angular/core/testing';

// Project
import { Theme } from '../../interfaces/theme';
import { NgxThemesService } from './ngx-themes.service';
import { THEMES_CONFIG } from '../../tools/themes-token';
import { ThemesConfig } from '../../interfaces/themes-config';



const ThemesConfig: ThemesConfig = {
  themes: [
    {
      id: 'lightTheme',
      values: {
        '--color': '#fff',
        '--background': '#000',
      },
      other: {
        name: 'light'
      }
    },
    {
      id: 'darkTheme',
      values: {
        '--color': '#000',
        '--background': '#fff',
      }
    },
    {
      id: 'blueTheme',
      values: {
        '--color': '#00f',
        '--background': '#003',
      }
    }
  ],
  active: 'lightTheme',
  default: 'darkTheme',
};

const FakeTheme: Theme = {
  id: 'fakeTheme',
  values: {
    '--color': '#111',
    '--background': '#222',
  },
  other: {
    name: 'fake'
  }
};





describe('NgxThemesService', () => {
  let service: NgxThemesService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxThemesService,
        { provide: THEMES_CONFIG, useValue: JSON.parse(JSON.stringify(ThemesConfig)) },
      ]
    });
    service = TestBed.inject(NgxThemesService);
  });





  it('be created', () => {
    expect(service).toBeTruthy();
  });





  describe('variables', () => {

    it('activeTheme', () => {
      expect(service.activeTheme).toBeTruthy();
      expect(service.activeTheme).toBe('lightTheme');
      expect(service.activeTheme).toEqual(ThemesConfig.active);
    });

    it('defaultTheme', () => {
      expect(service.defaultTheme).toBeTruthy();
      expect(service.defaultTheme).toBe('darkTheme');
      expect(service.defaultTheme).toEqual(ThemesConfig.default);
    });

    it('themes', () => {
      expect(service.themes).toBeTruthy();
      expect(service.themes).toEqual(ThemesConfig.themes);
    });

  });





  describe('initService()', () => {
    it('be truthy', () => {
      expect(service.initService).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'initService');
      service.initService();
      expect(service.initService).toHaveBeenCalled();
    });
  });





  describe('getTheme()', () => {
    it('be truthy', () => {
      expect(service.getTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'getTheme');
      service.getTheme('lightTheme');
      expect(service.getTheme).toHaveBeenCalled();
    });
    it(`be called with 'lightTheme'`, () => {
      spyOn(service, 'getTheme');
      service.getTheme('lightTheme');
      expect(service.getTheme).toHaveBeenCalledWith('lightTheme');
    });
    it(`get theme 'lightTheme'`, () => {
      expect(service.getTheme('lightTheme')).toEqual(ThemesConfig.themes[0]);
    });
    it(`get theme 'darkTheme'`, () => {
      expect(service.getTheme('darkTheme')).toEqual(ThemesConfig.themes[1]);
    });
    it(`get theme 'blueTheme'`, () => {
      expect(service.getTheme('blueTheme')).toEqual(ThemesConfig.themes[2]);
    });

    describe('errors', () => {
      it(`Theme not found: 'fooBar'`, () => {
        expect(() => {
          service.getTheme('fooBar');
        }).toThrow(new Error(`Theme not found: 'fooBar'`));
      });
      it(`Theme not found: ''`, () => {
        expect(() => {
          service.getTheme('');
        }).toThrow(new Error(`Theme not found: ''`));
      });
    });

  });





  describe('getThemeOther()', () => {
    it('be truthy', () => {
      expect(service.getThemeOther).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'getThemeOther');
      service.getThemeOther('lightTheme');
      expect(service.getThemeOther).toHaveBeenCalled();
    });
    it(`be called with 'lightTheme'`, () => {
      spyOn(service, 'getThemeOther');
      service.getThemeOther('lightTheme');
      expect(service.getThemeOther).toHaveBeenCalledWith('lightTheme');
    });
    it(`get theme other active`, () => {
      expect(service.getThemeOther()).toEqual(ThemesConfig.themes[0].other);
    });
    it(`get theme other 'lightTheme'`, () => {
      expect(service.getThemeOther('lightTheme')).toEqual(ThemesConfig.themes[0].other);
    });
    it(`get theme other 'darkTheme'`, () => {
      expect(service.getThemeOther('darkTheme')).toEqual(ThemesConfig.themes[1].other);
    });
    it(`get theme other 'blueTheme'`, () => {
      expect(service.getThemeOther('blueTheme')).toEqual(ThemesConfig.themes[2].other);
    });
  });





  describe('getActiveTheme()', () => {
    it('be truthy', () => {
      expect(service.getActiveTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'getActiveTheme');
      service.getActiveTheme();
      expect(service.getActiveTheme).toHaveBeenCalled();
    });
    it(`get active theme`, () => {
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[0]);
    });
    it(`get active theme 'darkTheme'`, () => {
      service.useTheme('darkTheme');
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[1]);
    });
    it(`get active theme 'lightTheme'`, () => {
      service.useTheme('darkTheme');
      service.useTheme('lightTheme');
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[0]);
    });
  });





  describe('getDefaultTheme()', () => {
    it('be truthy', () => {
      expect(service.getDefaultTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'getDefaultTheme');
      service.getDefaultTheme();
      expect(service.getDefaultTheme).toHaveBeenCalled();
    });
    it(`get default theme 'darkTheme'`, () => {
      expect(service.getDefaultTheme()).toEqual(ThemesConfig.themes[1]);
    });
    it(`get default theme 'lightTheme'`, () => {
      service.defaultTheme = 'lightTheme';
      expect(service.getDefaultTheme()).toEqual(ThemesConfig.themes[0]);
    });
  });





  describe('getAllThemes()', () => {
    it('be truthy', () => {
      expect(service.getAllThemes).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'getAllThemes');
      service.getAllThemes();
      expect(service.getAllThemes).toHaveBeenCalled();
    });
    it('return themes', () => {
      expect(service.getAllThemes()).toEqual(ThemesConfig.themes);
    });
  });





  describe('useTheme()', () => {
    it('be truthy', () => {
      expect(service.useTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'useTheme');
      service.useTheme('darkTheme');
      expect(service.useTheme).toHaveBeenCalled();
    });
    it(`be called with 'darkTheme'`, () => {
      spyOn(service, 'useTheme');
      service.useTheme('darkTheme');
      expect(service.useTheme).toHaveBeenCalledWith('darkTheme');
    });
    it('use dark theme', () => {
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[0]);
      service.useTheme('darkTheme');
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[1]);
      expect(service.getActiveTheme()).toEqual(service.themes[1]);
    });
    it('use blue theme', () => {
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[0]);
      service.useTheme('blueTheme');
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[2]);
      expect(service.getActiveTheme()).toEqual(service.themes[2]);
    });
  });





  describe('useDefaultTheme()', () => {
    it('be truthy', () => {
      expect(service.useDefaultTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'useDefaultTheme');
      service.useDefaultTheme();
      expect(service.useDefaultTheme).toHaveBeenCalled();
    });
    it('use default theme', () => {
      service.useDefaultTheme();
      expect(service.activeTheme).toBe('darkTheme');
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[1]);
      expect(service.getActiveTheme()).toEqual(service.themes[1]);
    });
  });





  describe('toggleTheme()', () => {
    it('be truthy', () => {
      expect(service.toggleTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'toggleTheme');
      service.toggleTheme();
      expect(service.toggleTheme).toHaveBeenCalled();
    });
    it('be called with 1', () => {
      spyOn(service, 'toggleTheme');
      service.toggleTheme(1);
      expect(service.toggleTheme).toHaveBeenCalledWith(1);
    });
    it('be called with 2 and 3', () => {
      spyOn(service, 'toggleTheme');
      service.toggleTheme(2, 3);
      expect(service.toggleTheme).toHaveBeenCalledWith(2, 3);
    });
    it('toggle theme', () => {
      service.toggleTheme();
      expect(service.activeTheme).toBe('darkTheme');
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[1]);
      expect(service.getActiveTheme()).toEqual(service.themes[1]);
      service.toggleTheme();
      expect(service.activeTheme).toBe('lightTheme');
      expect(service.getActiveTheme()).toEqual(ThemesConfig.themes[0]);
      expect(service.getActiveTheme()).toEqual(service.themes[0]);
    });
  });





  describe('addTheme()', () => {
    it('be truthy', () => {
      expect(service.addTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'addTheme');
      service.addTheme(FakeTheme);
      expect(service.addTheme).toHaveBeenCalled();
    });
    it('be called with FakeTheme', () => {
      spyOn(service, 'addTheme');
      service.addTheme(FakeTheme);
      expect(service.addTheme).toHaveBeenCalledWith(FakeTheme);
    });
    it('add theme', () => {
      service.addTheme(FakeTheme);
      expect(service.themes).toEqual([
        ThemesConfig.themes[0],
        ThemesConfig.themes[1],
        ThemesConfig.themes[2],
        FakeTheme
      ]);
    });
  });





  describe('removeTheme()', () => {
    it('be truthy', () => {
      expect(service.removeTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'removeTheme');
      service.removeTheme('darkTheme');
      expect(service.removeTheme).toHaveBeenCalled();
    });
    it(`be called with 'darkTheme'`, () => {
      spyOn(service, 'removeTheme');
      service.removeTheme('darkTheme');
      expect(service.removeTheme).toHaveBeenCalledWith('darkTheme');
    });
    it('remove theme', () => {
      service.removeTheme('darkTheme');
      expect(service.themes).toEqual([
        ThemesConfig.themes[0],
        ThemesConfig.themes[2],
      ]);
    });
  });





  describe('updateTheme()', () => {
    it('be truthy', () => {
      expect(service.updateTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'updateTheme');
      service.updateTheme('lightTheme', {'--color': '#666'});
      expect(service.updateTheme).toHaveBeenCalled();
    });
    it(`be called with params`, () => {
      spyOn(service, 'updateTheme');
      service.updateTheme('lightTheme', {'--color': '#666'});
      expect(service.updateTheme).toHaveBeenCalledWith('lightTheme', {'--color': '#666'});
    });
    it('update theme', () => {
      expect(service.themes).toEqual(ThemesConfig.themes);
      service.updateTheme('lightTheme', {'--color': '#666'});
      expect(service.themes[0]).toEqual({
        id: 'lightTheme',
        values: {'--color': '#666', '--background': '#000'},
        other: {name: 'light'}
      });
    });
  });





  describe('updateThemeProperty()', () => {
    it('be truthy', () => {
      expect(service.updateThemeProperty).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'updateThemeProperty');
      service.updateThemeProperty('lightTheme', '--color', '#666');
      expect(service.updateThemeProperty).toHaveBeenCalled();
    });
    it(`be called with params`, () => {
      spyOn(service, 'updateThemeProperty');
      service.updateThemeProperty('lightTheme', '--color', '#666');
      expect(service.updateThemeProperty).toHaveBeenCalledWith('lightTheme', '--color', '#666');
    });
    it('update theme', () => {
      expect(service.themes).toEqual(ThemesConfig.themes);
      service.updateThemeProperty('lightTheme', '--color', '#664');
      expect(service.themes[0]).toEqual({
        id: 'lightTheme',
        values: {'--color': '#664', '--background': '#000'},
        other: {name: 'light'}
      });
    });
  });





  describe('applyTheme()', () => {
    it('be truthy', () => {
      expect(service.applyTheme).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'applyTheme');
      service.applyTheme('lightTheme');
      expect(service.applyTheme).toHaveBeenCalled();
    });
    it('be called with params', () => {
      spyOn(service, 'applyTheme');
      service.applyTheme('lightTheme');
      expect(service.applyTheme).toHaveBeenCalledWith('lightTheme');
    });
    it('apply theme', () => {
      expect(document.getElementsByClassName('light-theme')[0].getAttribute('style')).toBe('--color:#fff; --background:#000;');
      service.applyTheme('darkTheme');
      expect(document.getElementsByClassName('light-theme')[0]).toBeUndefined();
      expect(document.getElementsByClassName('dark-theme')[0].getAttribute('style')).toBe('--color:#000; --background:#fff;');
      service.applyTheme('blueTheme');
      expect(document.getElementsByClassName('light-theme')[0]).toBeUndefined();
      expect(document.getElementsByClassName('dark-theme')[0]).toBeUndefined();
      expect(document.getElementsByClassName('blue-theme')[0].getAttribute('style')).toBe('--color:#00f; --background:#003;');
      service.applyTheme('lightTheme');
      expect(document.getElementsByClassName('dark-theme')[0]).toBeUndefined();
      expect(document.getElementsByClassName('blue-theme')[0]).toBeUndefined();
      expect(document.getElementsByClassName('light-theme')[0].getAttribute('style')).toBe('--color:#fff; --background:#000;');
    });
  });





  describe('setProperty()', () => {
    it('be truthy', () => {
      expect(service.setProperty).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'setProperty');
      service.setProperty('--color', '#333');
      expect(service.setProperty).toHaveBeenCalled();
    });
    it('be called with params', () => {
      spyOn(service, 'setProperty');
      service.setProperty('--color', '#333');
      expect(service.setProperty).toHaveBeenCalledWith('--color', '#333');
    });
    it('set property', () => {
      expect(document.getElementsByClassName('light-theme')[0].getAttribute('style')).toBe('--color:#fff; --background:#000;');
      service.setProperty('--color', '#333');
      expect(document.getElementsByClassName('light-theme')[0].getAttribute('style')).toBe('--color:#333; --background:#000;');
      service.setProperty('--color', '#444');
      expect(document.getElementsByClassName('light-theme')[0].getAttribute('style')).toBe('--color:#444; --background:#000;');
      service.setProperty('--background', '#555');
      expect(document.getElementsByClassName('light-theme')[0].getAttribute('style')).toBe('--color:#444; --background:#555;');
    });
  });





  describe('getProperty()', () => {
    it('be truthy', () => {
      expect(service.getProperty).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'getProperty');
      service.getProperty('--color');
      expect(service.getProperty).toHaveBeenCalled();
    });
    it('be called with params', () => {
      spyOn(service, 'getProperty');
      service.getProperty('--color');
      expect(service.getProperty).toHaveBeenCalledWith('--color');
    });
    it('get property', () => {
      expect(service.getProperty('--color')).toBe('#fff');
      expect(service.getProperty('--background')).toBe('#000');
    });
  });





  describe('getElement()', () => {
    it('be truthy', () => {
      expect(service.getElement).toBeTruthy();
    });
    it('be called', () => {
      spyOn(service, 'getElement');
      service.getElement();
      expect(service.getElement).toHaveBeenCalled();
    });
    it('return body', () => {
      expect(service.getElement()).toEqual(document.body);
    });
  });





});
