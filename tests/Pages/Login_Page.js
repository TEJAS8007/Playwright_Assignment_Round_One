import { expect,test } from '@playwright/test';
import log from '../Utilities/logger';
import data from '../Utilities/config.json';


export class Login_Page {

    constructor(page) {
        this.page=page;
        this.username="[name='username']";
        this.password="[name='password']";
        this.login_button="[type='submit']";
    }

    async get_Login_Page(url){
        await this.page.goto(url);
        
       try {
             await expect(this.page).toHaveURL(url);
             log.info('WebPage url matched...');
       } catch(error) {
             log.info('url not matched...');
       }

    }

    async validate_title(title) {
        
        console.log(await this.page.title());
        try {
             await expect(this.page).toHaveTitle(title);
             log.info('WebPage Title matched...');
       } catch(error) {
             log.info('Title not matched...');
       }
    }

    async complete_Login_Action(un,ps) {

        await this.page.locator(this.username).fill(un);
        try {
            await expect (this.page.locator(this.username)).toHaveValue(un);
            log.info('Username Entered properly...')
        } catch(error) {
            log.error('username not matched...')
        }

        await this.page.locator(this.password).fill(ps);
        try {
            await expect (this.page.locator(this.password)).toHaveValue(ps);
            log.info('Password Entered properly...')
        } catch(error) {
            log.error('Password not matched...')
        }

        await this.page.locator(this.login_button).click();
        log.info('Click on Login Button Done....');
        
    }
}