import * as GeoLocal from 'node-where';
import DBH from './dbh'
import SessionDBH from './session_dbh'

export default {
    // home: async function(req: any, res: any) {
    //     let session = req.state.session;
    //     if (!session) {
    //         session = { ipAddress: req.info.remoteAddress };
    //     }
    //     session.last = Date.now();
    //     await SessionDBH.storeSession(session)
    //
    //     return res('Success').state('session', session);
    // },
    game_images: async (req: any, res: any) => {
        if ( req.path.match('favicon') ) {
            return res().code(204).type('image/x-icon');
        }
    },
    generate_base_profile: function(req: any, res: any) {
        if ( req.path.match('favicon') ) {
            return res().code(204).type('image/x-icon');
        }

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

        let dbhUserName = DBH.addUser(ipAddressReq, geoPostCodeRes, geoAddressRes)
        res('This was successful')
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
    },
    create_match: function(req: any, res: any) {
        let ipAddressReq: string = req.info.remoteAddress

        let dbhResp = DBH.createMatch(req.payload, ipAddressReq)
        res(dbhResp)
    },
    // TO BE ADDED TO PRIVATE API
    private_add_game_to_db: function(req: any, res: any) {
        let ipAddressReq: string = req.info.remoteAddress

        let dbhResp = DBH.addGamesToDatabase(req.payload, ipAddressReq)
        res(dbhResp)
    }
}
