import * as GeoLocal from 'node-where';
import DBH from './dbh'

export default {
    private_add_game_to_db: function(req: any, res: any) {
        let ipAddressReq: string = req.info.remoteAddress

        let dbhResp = DBH.addGamesToDatabase(req.payload, ipAddressReq)
        res(dbhResp)
    },
    generate_base_profile: function(req: any, res: any) {
        let ipAddressReq: string = req.info.remoteAddress
        let geoPostCodeRes: string
        let geoAddressRes: string        

        GeoLocal.is(ipAddressReq, function(err, result) {
            if (result) {
                geoPostCodeRes = result.get('postalCode')
                geoAddressRes = result.get('city')
            } else {
                res("You have no location")
            }
        })

        let dbhResp = DBH.addUser(ipAddressReq, geoPostCodeRes, geoAddressRes)
        res(dbhResp)
    },
    protect_base_profile: function(req: any, res: any) {
        let ipAddressReq: string = req.info.remoteAddress

        let dbhResp = DBH.protectYourProfile(req.payload, ipAddressReq)
        res(dbhResp)
    },
    build_base_profile: function(req: any, res: any) {
        let ipAddressReq: string = req.info.remoteAddress

        let dbhResp = DBH.buildYourProfile(req.payload, ipAddressReq)
        res(dbhResp)
    }
}