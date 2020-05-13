import Router from 'koa-router';
import { checkAuth } from '../../lib/checkAuth';
import * as shareCtrl from './share.ctrl';

const share = new Router();
share.get('/', checkAuth, shareCtrl.sendMsg);
share.post('/', checkAuth, shareCtrl.receiveMsg);

export default share;
