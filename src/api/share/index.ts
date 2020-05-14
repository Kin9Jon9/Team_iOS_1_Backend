import Router from 'koa-router';
import { checkAuth } from '../../lib/checkAuth';
import * as shareCtrl from './share.ctrl';

const share = new Router();
share.get('/', shareCtrl.sendMsg);
share.post('/', shareCtrl.receiveMsg);

export default share;
