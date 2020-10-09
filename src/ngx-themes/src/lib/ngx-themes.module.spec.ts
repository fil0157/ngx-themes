// Project
import { NgxThemesModule } from '@fil0157/ngx-themes';

// App
import { NgxThemesConfig } from 'src/app/config';



describe('NgxThemesModule', () => {
  let ngxThemesModule: NgxThemesModule;


  beforeEach(() => {
    ngxThemesModule = new NgxThemesModule();
  });


  it('be created', () => {
    expect(ngxThemesModule).toBeTruthy();
  });


  describe('forRoot()', () => {

    it('get forRoot()', () => {
      expect(typeof NgxThemesModule.forRoot(NgxThemesConfig)).toEqual('object');
    });
    it('forRoot() is object', () => {
      expect(NgxThemesModule.forRoot(NgxThemesConfig)).toBeInstanceOf(Object);
      expect(typeof NgxThemesModule.forRoot(NgxThemesConfig)).toEqual('object');
    });

  });


});
