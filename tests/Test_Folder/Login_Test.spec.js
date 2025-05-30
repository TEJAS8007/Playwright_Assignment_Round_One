import { test, expect } from '@playwright/test';
import data from '../Utilities/config.json';
import log from '../Utilities/logger';
import { Login_Page } from '../Pages/Login_Page';
import path from 'path';

let page;
let login;
let context;

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({
        recordVideo: { dir: 'videos/' } 
    });
    page = await context.newPage();
    login = new Login_Page(page);
    log.debug('Before All Started....');
});


test('Login_Test', async () => {
    await page.context().tracing.start({screenshots:true,snapshots:true});
    log.info('Get page Started....');
    await login.get_Login_Page(data.url);
    log.info('Get page Ended....');
    log.info('Title Verification Started....');
    await login.validate_title(data.title);
    log.info('Title Verification Ended....');
    log.info('Login Action Started....');
    await login.complete_Login_Action(data.un, data.ps);
    log.info('Login Action Ended....');
    await page.context().tracing.stop({path:'Login.zip'});
});

test.afterAll(async () => {
    
    await page.close();
    await context.close();
    log.info('Page closed......');
});
