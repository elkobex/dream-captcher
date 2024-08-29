import { model, Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true, default: 'Undefined' },
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true, default: 0 },
    percent: { type: Number, required: true, default: 0 },
    resetToken: { type: String, default: 'Undefined' },
    refreshToken: { type: String, default: 'Undefined' },
    startDate: { type: Number, required: true, default: 0 },
    endDate: { type: Number, required: true, default: 0 },
    active: { type: Boolean, required: true, default: false },
    isBlocked: { type: Boolean, required: true, default: false },
    subscription: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now },
    config: {
        type: {
            direct: { type: Boolean, default: false },
            counter: { type: String, default: 'mi-contador' },
            redirect: { type: String, default: 'https://mi-redirecion-cpa.com/' },
            typeHack: { type: String, default: 'default' },
            globalCounter: { type: String, default: 'EhloQ023' },
            backRedirect: { type: String, default: 'https://mi-redirecion-cpa.com/' },
            serverRedirect: { type: String, default: 'https://mi-redirecion-cpa.com/' },
        },
        default: {
            direct: false,
            counter: 'mi-contador',
            redirect: 'https://mi-redirecion-cpa.com/',
            typeHack: 'default',
            globalCounter: 'EhloQ023',
            backRedirect: 'https://mi-redirecion-cpa.com/',
            serverRedirect: 'https://mi-redirecion-cpa.com/',
        },
    },
});
export default model('users', userSchema);
