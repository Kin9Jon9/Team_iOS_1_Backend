import { Context } from 'koa';
import Joi from 'joi';
import { resolve } from 'dns';
import { request } from 'http';

export const sendMsg = async (ctx: Context, next: () => void) => {
   console.log(ctx.request.query);
   
};

export const receiveMsg = async (ctx: Context, next: () => void) =>{

};
