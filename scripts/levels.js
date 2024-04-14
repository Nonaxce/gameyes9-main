
export const LEVELS_JS = [
    {
        level: 1,
        bg: {
            sprite: "level-1-bg",
            scale: 6,
        },
        levelNote: {
            text: "'In these halls are spawners three, destroy and thy shall reward thee \ncollect the gems of morganite and escape the fight'"
        },
        hasEnemy: true, // if level contains enemies, prevents enemy function in the scene from running if it contains none
        enemy: {
            sprite: "level-1-enemy",
            speed: 200,
            scale: 2
        },
        item: "pickaxe",
        isGravityReversed: false,
        map: [
            "                               ===========================",
            "                               =-                       -=",
            "                               =                         =",
            "                               =                         =",
            "                               =      S                * =",
            "                               =================  ==========----------=",
            "                                  =  =  =  =  ==  ==                 -=",
            "                                  -  -  -  -  ==  ==                  =",
            "                                  =  =  =  =  ==  ==               @ -=",
            "                               =----------------  ----       ==========",
            "                              =-                               =",
            "      =   =   =   =          =-                                =",
            "    ==-   -===-   -==       =-                  S     B        =",
            "    =-     -=-     -=      =-      =========  ==================",
            " =  =       =       =  =  =-      =-       =  =",
            " -  ==     ===     ==  - =-      =-        =  =",
            "==------------------------      =-    -----=  =----------",
            "=-                             =-     =                 =",
            "=      P                      =-      =                 =",
            "==          C  &             ==       = !!   *      B ! =",
            "==============================-       ===================",
            "            =",
            "            -",
        ]
    },
    {
        level: 2,
        bg: {
            sprite: "level-2-bg",
            scale: 9,
        },
        levelNote: {
            text: "Juno 31, 3005  \n I finnally finished the shrine a long way east from the err *this* base. \n My comrades and I have been constantly attacked by some hostiles here, \n Like they always ruin, or chipped the portal, which already \n is being weathered by this climate. I removed the stairs from the place \n maybe that should prevent it from degrading \n Note to self: cut the front lawn, the shears are in the chest"
        },
        hasEnemy: true,
        enemy: {
            sprite: "level-2-enemy",
            speed: 200,
            scale: 3
        },
        item: "shears",
        isGravityReversed: false,
        map: [
            "3     P      3                             S            S                      S         S" ,
            "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
        ]   
    },
    {
        level: 3,
        bg: {
            sprite: "level-3-bg",
            scale: 4.5,
        },
        levelNote: {
            text: "D O \n     NOT \n         T  O U CH \n\n Also try connecting those machines, it might make the portal work"
        },
        hasEnemy: true,
        enemy: {
            sprite: "level-1-enemy",
            speed: 200,
            scale: 3
        },
        item: undefined,
        isGravityReversed: false,
        
        map: [
            "                                                                                   @",
            "                                                                                   |",
            "                                                                              ===========",
            "                                                                               ==--=--==",
            "                                                                                -~~-~~-          ",
            "                                                                                 == ==",                                                                               
            "                                                                               ",
            "                                                                                               -=B=-      -==-      -==-",
            "                                                      )                                         ---",
            "                                             ===========",
            "                                             -         -                                                                   ",
            "                                                                             = !    =",
            "                           =  &    B=                                       ==========                        )         =====B=====",
            "                          ============                                         ~                           ========         ---",
            "                         ====-      -                                          ~",
            "            -           ====-                                            =     ~                       ~",
            "           ==------ ------==            ===(=====               ==========     ~           ====B====   ~                                                                           *",
            "            =             =             -       -               -        -     ~              ---      ~                           ====B====       =       =       =       ==========",
            "            -             -                             *   =                  ~                       ~                              ---          ~       ~       ~        -======-",
            "            - P           -                         =========                  ~                       ~         *    B=                           ~       ~       ~         -====-",
            "            =           B =                         -       -                  ~                       ~    =======(====                           ~       ~       ~          -==-",
            "           ================                                                    ~                       ~    -          -                           ~       ~       ~           --",
            "            - - -     - - -                                                    ~                       ~                                           ~       ~       ~",
            "           -=- -       - -=-                                                   ~                       ~                                           ~       ~       ~",
            "            = -         - =                                                    ~                       ~                                           ~       ~       ~",
            "            =-           -=                                                    ~                       ~                                           ~       ~       ~",
            "=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=",
            "-                                                                                                                                                                                              -"
        ]
    },
    {
        level: 4,
        bg: {
            sprite: "level-4-bg",
            scale: 4,
        },
        levelNote: {
            text: "Exerpt 3231 AD. \n\n   Due to the planet's unstability it's gravitional pull kept \nreversing at a consistent interval. Studies have been conducted \nin this very laboratory your decades. I as a last remark  will say that \nthe planet's gravitional field will fluctuate more so up to 10s, \n causing the demise of the laboratory \n\nNote: the gravity will be so strong that no one can resist and jump"
        },
        enemy: {
            sprite: "level-4-enemy",
            speed: 200,
            scale: 3
        },
        hasEnemy: true,
        
        isGravityReversed: true,
        item: undefined,

        map: [
            "                                  MMMMMMMMMMMMMMMMMMMMMMMM+++++++++MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
            "                                  mm                                  m                             mm                                                                       ",
            "                                  m                                   m                              m                                                                       ",
            "                                  m            m                                   M                 m                                                                       ",
            "                                  m @          m               *                S  M                mm                                                                       ",
            "                                  MMMMMMMMMMMMMMm++++++++MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM      MMMMMM",
            "M                          M        mmmmmmmmmmmm      M            M                     m      m",
            "M                          M                          M            M                     m      m",
            "M                          M                          M            M                     m      m",
            "MMMMMMMMMMMMMM++++++++++MMMMMMMMMM+++++++MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM++++++++++++++M      MMMMMMMMM",
            "mm  &                                                                                                   mm                                                                               ",
            "m                                                                                                       mmm   ",
            "m                                                                                                  S    mmmm    ",
            "m            mMMMMMMMMMMMMMMMMMM         mmmMMMMMMMMMMMMMMMMMMM           MMMMMMmmmmMMMMMMMMMMMMMMMMMMMMMMMMM",
            "m S          m  M           M  m                             mm            mMmmmmmmmmmmMmmmmmmmmMMmmmmmmmmmm",
            "mMMMMMMMm    m                 m              )       *     (mm            +",
            "mm           m                 m           mMMMMMMMMMMMMMMMMMMM            +",
            "m            m   mMm      mMm  +   *       +                  +            +",
            "m            m   mmm      mmm  +           +                  +            +",
            "m            m   mMm      mMm  m           m                  +   *        +",
            "m            m                 m           m                  +++MMMMMMMM+++",
            "m P          m                 m           m                      mmmmmm ",
            "mm          mm                 m           m",
            "MMMMMMMMMMMMMM                 mMMMMMMMMMBMm",
            

        ]
    },
    {
        level: 5,
        bg: {
            sprite: "level-5-bg",
            scale: 4.7,
        },

        levelNote: {
            text: "Juno 31, 3005  \n I finnally finished the shrine, and it looks a bit weird. \n Well anyway now my comrades and I can safeguard our portals, \n I locked the portal for maintainance reasons, \n the key, its uh hidden somewhere.."
        },
        enemy: {
            sprite: "level-5-enemy",
            speed: 200,
            scale: 2.1
        },
        hasEnemy: true,
        isGravityReversed: true,
        

        map: [
            "",
            "MMMMMMMMMMMM                                           333333333333333333333~33333~333333333333333",
            "m P        m                                           3                                         3",
            "m          m                                           3              S                          3",
            "MMMMMwwwwwwMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm       33333333333           3333333     3",
            "                                                       3       |",
            "mww&wwwwwwwWWWWWWWWWWWWWWSWWFWWWWWWWWWWWWWWWWWWWWWWWWWW3       |",
            "MMMMMMMMMMMM       MMMMMMMMMMMMMMM+++++++MMMMMM        3       |",
            "                                              |        |       |",
            "                                              |        |       |",
            "                                              |       *|       |",
            "                                              |       3|       |               *",
            "                                              |        |       |               |",
            "       M+++++++++++++++++++++M                |        |       |        333333333333333",
            "       MMMMMMMMMMMMMMMMMMMMMMM                |        |       |               @",
            "        m                   m                 |        |       |",
            "        m                   m                 |        |       |",
            "        m    *         !!   m                 |        |       |",
            "        MMMMMMMMMMM MMMMMMMMM                 |        |       |                               ",
            "                  m m                         |        |       |                      3333333333333",
            " 333333333333333333 333333333333333333~~~~~~333        |       |",
            " 3                                                     |       |",
            " 3          *  S                                       |       |",
            " 3        333333333B3333~~~~~~~~~~333333333333333    ~~3       |        33333~~~~~~~333",
            " 3        |       ---                                          |",
            " 3        |                                                    |",
            " 3        333333333333=333333333=3333333333=333333333333       3",
            " 3                                                             3",
            " 3                                                             3          *                 *",
            " 3                   S                    S                    3         3333         33333333333333",
            " 333333333333333333333=333333333=3333333333=33333333333333333333",
            "",
            "",
            "                                                                          @",
            "                                                                          |",
            "                                                                        3333333333333333",
            "",
            "",
            "",
            "",
            

        ]
    },
]