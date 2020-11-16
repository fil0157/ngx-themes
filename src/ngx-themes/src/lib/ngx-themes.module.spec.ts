// Project
import { NgxThemesModule } from './ngx-themes.module';

// App
import { NgxThemesConfig } from 'src/app/core/configs/ngx-themes/ngx-themes.config';



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
