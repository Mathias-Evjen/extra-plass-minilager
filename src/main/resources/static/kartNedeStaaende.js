const klasse3TextCoords = {
    x: "22%",
    y: "60%"
};

const klasse7TextCoords = {
    x: "30%",
    y: "60%"
}

const klasse9TextCoords = {
    x:"35%",
    y: "60%"
}

const klasse15TextCoords = {
    x: "40%",
    y: "60%"
}

const klasse16TextCoords = {
    x: "42%",
    y: "60%"
}

export function printKartNedeStaaende() {
    let kart = `<div class="container-nede">
        <div id="popup-box-nede" class="popup-wrapper"></div> <!--Denne div'en er for å vise popup boksen-->

        <!-- Zoom-knapper -->
        <div id="zoom-knapper" class="zoom-wrapper">
            <button id="reset-zoom-knapp-nede">
                <svg viewBox="0 0 64 64">
                    <path d="M 32 64 C 14.357 64 0 49.643 0 31.998 L 0.018 31.562 l 4.982 0.438 l -0.018 0.436
                    C 4 46 16 59 32 59 s 27 -11 27 -27 c 0 -16 -11 -27 -27 -27 C 21 5 12 8 6 22 L 1.884 19.454
                    C 9.548 1.895 25.497 0 32 0 C 49.643 0 64 14.355 64 31.998 C 64 49.643 49.643 64 32 64 z"/>
                    <polyline points="16.865,22.1 2.285,24.15 0.259,9.749"/>
                </svg>
            </button>
            <button id="zoom-inn-knapp-nede">
                <svg viewBox="0 0 64 64">
                    <rect y="29" width="64" height="4"></rect>
                    <rect x="29" width="4" height="64"></rect>
                </svg>
            </button>
            <button id="zoom-ut-knapp-nede">
                <svg viewBox="0 0 64 64">
                    <rect y="29" width="64" height="4"></rect>
                </svg>
            </button>
        </div>

        <!-- Kart -->
        <svg id="kart-nede" width="100%" height="100%">
            <!-- Øverste rad -->
            <svg width="1440px" height="96px" x="0" y="0">
                <!-- Klasse 3 -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="0" y="0">
                        <rect id="600" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">600</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="0">
                        <rect id="601" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">601</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="0">
                        <rect id="602" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">602</text>
                    </svg>
                    <svg width="96px" height="96px" x="288px" y="0">
                        <rect id="603" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">603</text>
                    </svg>
                    <svg width="96px" height="96px" x="384px" y="0">
                        <rect id="604" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">604</text>
                    </svg>
                    <svg width="96px" height="96px" x="480px" y="0">
                        <rect id="605" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">605</text>
                    </svg>
                    <svg width="96px" height="96px" x="576px" y="0">
                        <rect id="606" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">606</text>
                    </svg>
                    <svg width="96px" height="96px" x="672px" y="0">
                        <rect id="607" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">607</text>
                    </svg>
                    <svg width="96px" height="96px" x="768px" y="0">
                        <rect id="608" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">608</text>
                    </svg>
                    <svg width="96px" height="96px" x="864px" y="0">
                        <rect id="609" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">609</text>
                    </svg>
                    <svg width="96px" height="96px" x="960px" y="0">
                        <rect id="610" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">610</text>
                    </svg>
                    <svg width="96px" height="96px" x="1152px" y="0">
                        <rect id="611" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">611</text>
                    </svg>
                    <svg width="96px" height="96px" x="1248px" y="0">
                        <rect id="612" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">612</text>
                    </svg>
                    <svg width="96px" height="96px" x="1344px" y="0">
                        <rect id="613" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">613</text>
                    </svg>
                </g>
            </svg>


            <!-- Rad 1 vertikal -->
            <svg width="192px" height="768px" x="96px" y="192px">
            
                <!-- Klasse 3 venstre -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="0" y="0">
                        <rect id="407" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">407</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="96px">
                        <rect id="406" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">406</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="192px">
                        <rect id="405" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">405</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="288px">
                        <rect id="404" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">404</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="384px">
                        <rect id="403" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">403</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="480px">
                        <rect id="402" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">402</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="576px">
                        <rect id="401" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">401</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="672px">
                        <rect id="400" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">400</text>
                    </svg>
                </g>
            
                <!-- Klasse 3 høyre -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="96px" y="0">
                        <rect id="408" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">408</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="96px">
                        <rect id="409" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">409</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="192px">
                        <rect id="410" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">410</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="288px">
                        <rect id="411" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">411</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="384px">
                        <rect id="412" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">412</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="480px">
                        <rect id="413" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">413</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="576px">
                        <rect id="414" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">414</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="672px">
                        <rect id="415" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">415</text>
                    </svg>
                </g>
            </svg>

            <!-- Rad 2 vertikal -->
            <svg width="288px" height="960px" x="384px" y="192px">

                <!-- Klasse 3 -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="0" y="0">
                        <rect id="423" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">423</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="0">
                        <rect id="424" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">424</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="0">
                        <rect id="425" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">425</text>
                    </svg>
                    
                    <svg width="96px" height="96px" x="192px" y="384px">
                        <rect id="429" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">429</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="480px">
                        <rect id="430" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">430</text>
                    </svg>
                    
                    <svg width="96px" height="96px" x="0" y="864px">
                        <rect id="567" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">567</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="864px">
                        <rect id="569" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">569</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="864px">
                        <rect id="416" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">416</text>
                    </svg>
                </g>

                <!-- Klasse 7 venstre -->
                <g id="klasse-7">
                    <svg width="144px" height="96px" x="0" y="96px">
                        <rect id="422" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">422</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="192px">
                        <rect id="421" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">421</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="288px">
                        <rect id="420" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">420</text>
                    </svg>
                    
                    <svg width="144px" height="96px" x="0" y="576px">
                        <rect id="418" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">418</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="672px">
                        <rect id="417" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">417</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="768px">
                        <rect id="565" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">565</text>
                    </svg>

                </g>

                <!-- Klasse 7 høyre -->
                <g id="klasse-7">
                    <svg width="144px" height="96px" x="144px" y="96px">
                        <rect id="426" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">426</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="192px">
                        <rect id="427" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">427</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="288px">
                        <rect id="428" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">428</text>
                    </svg>
                    
                    <svg width="144px" height="96px" x="144px" y="576px">
                        <rect id="431" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">431</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="672px">
                        <rect id="432" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">432</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="768px">
                        <rect id="433" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">433</text>
                    </svg>
                </g>

                <!-- Klasse 14 -->
                <g id="klasse-14">
                    <svg width="192px" height="192px" x="0" y="384px">
                        <rect id="419" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <rect class="søyle" width="25.6px" height="25.6px" x="32px" y="25.6px" stroke="black" stroke-width="1" fill="cornflowerblue"/>
                        <text x="35%" y="60%">419</text>
                    </svg>
                </g>
                
            </svg>

            <!-- Rad 3 vertikal -->
            <svg width="288px" height="960px" x="768px" y="192px">

                <!-- Klasse 3 -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="0" y="0">
                        <rect id="458" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">458</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="0">
                        <rect id="459" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">459</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="0">
                        <rect id="460" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">460</text>
                    </svg>
            
                    <svg width="96px" height="96px" x="0" y="864px">
                        <rect id="449" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">449</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="864px">
                        <rect id="448" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">448</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="864px">
                        <rect id="447" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">447</text>
                    </svg>
                </g>

                <!-- Klasse 7 venstre -->
                <g id="klasse-7">
                    <svg width="144px" height="96px" x="0" y="96px">
                        <rect id="457" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">457</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="192px">
                        <rect id="456" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">456</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="288px">
                        <rect id="455" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">455</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="384px">
                        <rect id="454" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <rect class="søyle" width="25.6px" height="25.6px" x="44.8px" y="16px" stroke="black" stroke-width="4" fill="cornflowerblue"/>
                        <text x="${klasse7TextCoords.x}" y="85%">454</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="480px">
                        <rect id="453" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">453</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="576px">
                        <rect id="452" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">452</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="672px">
                        <rect id="451" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">451</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="768px">
                        <rect id="450" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">450</text>
                    </svg>
                </g>

                <!-- Klasse 7 Høyre -->
                <g id="klasse-7">
                    <svg width="144px" height="96px" x="144px" y="96px">
                        <rect id="461" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">461</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="192px">
                        <rect id="462" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">462</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="288px">
                        <rect id="463" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">463</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="384px">
                        <rect id="464" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">464</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="480px">
                        <rect id="465" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">465</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="576px">
                        <rect id="466" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">466</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="672px">
                        <rect id="467" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">467</text>
                    </svg>
                    <svg width="144px" height="96px" x="144px" y="768px">
                        <rect id="468" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse7TextCoords.x}" y="${klasse7TextCoords.y}">468</text>
                    </svg>
                </g>
            </svg>

            <!-- Rad 4 vertikal -->
            <svg width="192px" height="960px" x="1152px" y="192px">
                <!-- Klasse 3 venstre -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="0" y="0">
                        <rect id="498" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">498</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="96px">
                        <rect id="497" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">497</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="192px">
                        <rect id="496" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">496</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="288px">
                        <rect id="495" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">495</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="384px">
                        <rect id="494" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">494</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="480px">
                        <rect id="493" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">493</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="576px">
                        <rect id="492" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">492</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="672px">
                        <rect id="491" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">491</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="768px">
                        <rect id="490" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">490</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="864px">
                        <rect id="489" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">489</text>
                    </svg>
                </g>

                <!-- Klasse 3 høyre -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="96px" y="0">
                        <rect id="499" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">499</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="96px">
                        <rect id="500" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">500</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="192px">
                        <rect id="501" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">501</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="288px">
                        <rect id="502" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">502</text>
                    </svg>
                    
                    <svg width="96px" height="96px" x="96px" y="576px">
                        <rect id="504" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">504</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="672px">
                        <rect id="505" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">505</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="768px">
                        <rect id="506" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">506</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="864px">
                        <rect id="488" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">488</text>
                    </svg>

                </g>

                <!-- Klasse 9 -->
                <g id="klasse-9-liggende">
                    <svg width="96px" height="192px" x="96px" y="384px">
                        <rect id="503" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <rect class="søyle" width="25.6px" height="25.6px" x="22.4px" y="16px" stroke="black" stroke-width="1" fill="cornflowerblue"/>
                        <text x="22%" y="60%">503</text>
                    </svg>
                </g>
            </svg>

            <!-- Rad 5 vertikal -->
            <svg width="288px" height="864px" x="768px" y="1248px">
                
                <!-- Klasse 3 -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="0" y="0">
                        <rect id="444" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">444</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="0">
                        <rect id="445" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">445</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="0">
                        <rect id="446" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">446</text>
                    </svg>
                    
                    <svg width="96px" height="96px" x="0" y="96px">
                        <rect id="443" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">443</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="192px">
                        <rect id="442" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">442</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="288px">
                        <rect id="441" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">441</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="384px">
                        <rect id="440" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">440</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="480px">
                        <rect id="439" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">439</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="576px">
                        <rect id="438" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">438</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="672px">
                        <rect id="437" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">437</text>
                    </svg>
                    
                    <svg width="96px" height="96px" x="0" y="768px">
                        <rect id="436" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">436</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="768px">
                        <rect id="435" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">435</text>
                    </svg>
                    <svg width="96px" height="96px" x="192px" y="768px">
                        <rect id="434" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">434</text>
                    </svg>

                </g>

                <!-- Klasse 9 -->
                <g id="klasse-9">
                    <svg width="192px" height="96px" x="96px" y="96px">
                        <rect id="469" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">469</text>
                    </svg>
                    <svg width="192px" height="96px" x="96px" y="192px">
                        <rect id="470" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">470</text>
                    </svg>
                    <svg width="192px" height="96px" x="96px" y="288px">
                        <rect id="471" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">471</text>
                    </svg>
                    <svg width="192px" height="96px" x="96px" y="384px">
                        <rect id="472" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">472</text>
                    </svg>
                    <svg width="192px" height="96px" x="96px" y="480px">
                        <rect id="473" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">473</text>
                    </svg>
                    <svg width="192px" height="96px" x="96px" y="576px">
                        <rect id="474" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">474</text>
                    </svg>
                    <svg width="192px" height="96px" x="96px" y="672px">
                        <rect id="475" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">475</text>
                    </svg>
                </g>
            </svg>

            <!-- Rad 6 vertikal -->
            <svg width="192px" height="960px" x="1152px" y="1248px">

                <!-- Klasse 9 -->
                <g id="klasse-9">
                    <svg width="192px" height="96px" x="0px" y="0px">
                        <rect id="487" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">487</text>
                    </svg>
                </g>
                <g id="klasse-9-liggende">
                    <svg width="96px" height="192px" x="96px" y="480px">
                        <rect id="511" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="22%" y="60%">511</text>
                    </svg>
                </g>

                <!-- Klasse 3 venstre-->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="0px" y="96px">
                        <rect id="486" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">486</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="192px">
                        <rect id="485" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">485</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="288px">
                        <rect id="484" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">484</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="384px">
                        <rect id="483" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">483</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="480px">
                        <rect id="482" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">482</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="576px">
                        <rect id="481" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">481</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="672px">
                        <rect id="480" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">480</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="768px">
                        <rect id="479" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">479</text>
                    </svg>
                    <svg width="96px" height="96px" x="0px" y="864px">
                        <rect id="478" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">478</text>
                    </svg>

                </g>

                <!-- Klasse 3 høyre -->
                <g id="klasse-3">
                    <svg width="96px" height="96px" x="96px" y="96px">
                        <rect id="507" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">507</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="192px">
                        <rect id="508" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">508</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="288px">
                        <rect id="509" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">509</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="384px">
                        <rect id="510" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">510</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="672px">
                        <rect id="512" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">512</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="768px">
                        <rect id="513" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">513</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="864px">
                        <rect id="514" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">514</text>
                    </svg>

                </g>
            </svg>

            <!-- Innerste rom -->
            <svg width="672px" height="1056px" x="0" y="1248px">

                <!-- Klasse 16 -->
                <g id="klasse-16">
                    <svg width="336px" height="144px" x="0" y="0">
                        <rect id="521" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse16TextCoords.x}" y="${klasse16TextCoords.y}">521</text>
                    </svg>
                    <svg width="336px" height="144px" x="0" y="144px">
                        <rect id="520" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse16TextCoords.x}" y="${klasse16TextCoords.y}">520</text>
                    </svg>
                    <svg width="336px" height="144px" x="0" y="288px">
                        <rect id="519" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse16TextCoords.x}" y="${klasse16TextCoords.y}">519</text>
                    </svg>
                    <svg width="336px" height="144px" x="0" y="432px">
                        <rect id="518" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse16TextCoords.x}" y="${klasse16TextCoords.y}">518</text>
                    </svg>
                    <svg width="336px" height="144px" x="0" y="576px">
                        <rect id="517" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse16TextCoords.x}" y="${klasse16TextCoords.y}">517</text>
                    </svg>

                </g>
                <g id="klasse-16-515">
                    <svg width="336px" height="192px" x="0" y="864px">
                        <rect id="515" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="42%" y="55%">515</text>
                    </svg>
                </g>    
                <!-- Klasse 15 -->
                <g id="klasse-15-516">
                    <svg width="336px" height="144px" x="0" y="720px">
                        <rect id="516" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="42%" y="60%"">516</text>
                    </svg>
                </g>
                <g id="klasse-15">
                    <svg width="240px" height="144px" x="432px" y="0">
                        <rect id="522" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse15TextCoords.x}" y="${klasse15TextCoords.y}">522</text>
                    </svg>
                    <svg width="240px" height="144px" x="432px" y="144px">
                        <rect id="523" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse15TextCoords.x}" y="${klasse15TextCoords.y}">523</text>
                    </svg>
                    <svg width="240px" height="144px" x="432px" y="288px">
                        <rect id="524" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse15TextCoords.x}" y="${klasse15TextCoords.y}">524</text>
                    </svg>
                    <svg width="240px" height="144px" x="432px" y="432px">
                        <rect id="525" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse15TextCoords.x}" y="${klasse15TextCoords.y}">525</text>
                    </svg>
                    <svg width="240px" height="144px" x="432px" y="576px">
                        <rect id="526" width="100%" height="100%" stroke="black" stroke-width="4" fill="white"/>
                        <text x="${klasse15TextCoords.x}" y="${klasse15TextCoords.y}">526</text>
                    </svg>

                </g>

                <!-- Outline -->
                <line x1="0" x2="100%" y1="0" y2="0" stroke="black" stroke-width="4"/>
                <line x1="0" x2="100%" y1="100%" y2="100%" stroke="black" stroke-width="4"/>
                <line x1="100%" x2="100%" y1="0" y2="864px" stroke="black" stroke-width="4"/>
                <line x1="100%" x2="100%" y1="1008px" y2="100%" stroke="black" stroke-width="4"/>
            </svg>


            <!-- Trapp -->
            <g id="trapp-text">
                <svg width="672px" height="288px" x="0" y="2304px">
                    <rect width="100%" height="100%" fill="beige"/>
                    <svg id="trapp-ikon" xmlns="http://www.w3.org/2000/svg" x="22%" y="18%" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/><g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M18,8h-2.42v3.33H13v3.33h-2.58 V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18V8z"/></g></g></g></svg>
                    <line x1="100%" x2="100%" y1="0" y2="144px" stroke="black" stroke-width="4"/>
                    <line x1="100%" x2="100%" y1="240px" y2="100%" stroke="black" stroke-width="4"/>
                </svg>
            </g>

            <!-- Port -->
            <svg width="288px" height="48px" x="1024px" y="2544px">
                <rect width="100%" height="100%" fill="white"/>
                <text x="38%" y="80%">Port</text>
                <line x1="0%" y1="100%" x2="0" y2="0" stroke="black" stroke-dasharray="7" stroke-width="4"/>
                <line x1="0" x2="100%" y1="0" y2="0" stroke="black" stroke-dasharray="7" stroke-width="4"/>
                <line x1="100%" y1="100%" x2="100%" y2="0" stroke="black" stroke-dasharray="7" stroke-width="4"/>
            </svg>

        </svg>
    </div>`
    return kart;
}