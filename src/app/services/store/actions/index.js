import * as AuthAction from './auth.action'
import * as PageAction from './page.action'
import * as EquipmentAction from './equipment.action'
import * as MaterialAction from './material.action'
import * as TalentAction from './talent.action'
import * as PowerAction from './power.action'
import * as EffortAction from './effort.action'
import * as InterestAction from './interest.action'
import * as ResponsibleAction from './responsible.action'
import * as TemperamentAction from './temperament.action'
import * as AuthorityAction from './authority,action'
import * as OpdAction from './opd.action'
import * as OrganizationAction from './organization.action'
import * as UnitAction from './unit.action'
import * as PositionAction from './poisition.action'

export let actions = { 
    ...AuthAction.default,
    ...PageAction.default,
    ...EquipmentAction.default,
    ...MaterialAction.default,
    ...TalentAction.default,
    ...PowerAction.default,
    ...EffortAction.default,
    ...InterestAction.default,
    ...ResponsibleAction.default,
    ...TemperamentAction.default,
    ...AuthorityAction.default,
    ...OpdAction.default,
    ...OrganizationAction.default,
    ...UnitAction.default,
    ...PositionAction.default
}