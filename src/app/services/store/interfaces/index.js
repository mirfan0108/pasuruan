import * as AuthInteface from './auth.interfaces'
import * as PageInterface from './page.interfaces'
import * as MasterInterface from './masterfiles.interfaces'
import * as PositionInterface from './position.interface'

export let states = {
    username: null,
    avatar: null,
    profile: null,
    onLoad: false,
    isPreloader: false, 
    ...AuthInteface.default,
    ...PageInterface.default,
    ...MasterInterface.default,
    ...PositionInterface.default
}