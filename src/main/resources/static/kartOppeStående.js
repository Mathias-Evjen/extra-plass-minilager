const klasse18TextCoords = {
    x: "45%",
    y: "55%"
}

const klasse3TextCoords = {
    x: "15%",
    y: "65%"
}

const klasse4TextCoords = {
    x: "25%",
    y: "60%"
}

const klasse9TextCoords = {
    x: "30%",
    x2: "15%",  // For tre-sifrede tall
    y: "55%"
}

const klasse14TextCoords = {
    x: "40%",
    x2: "30%",  // For tre-sifrede tall
    y: "55%",
}

export function printKartOppeStående(){
    kart = `
    <svg id="kart-oppe">

            <!-- Kjørerampe -->
            <svg width="496px" height="160px" x="672px" y="1856px">
                <rect width="100%" height="100%" fill="white"/>
                <line x1="0" y1="0" x2="100%" y2="0" stroke="black" stroke-width="2"/>
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="black" stroke-width="2"/>
                <text x="15%" y="50%" font-size="32px">Kjørerampe</text>
            </svg>

            <!-- Nederst venstre -->
            <svg width="288px" height="160px" x="0" y="1856px">
                <!-- Klasse 18 -->
                <g>
                    <svg width="96px" height="160px" x="0" y="0">
                        <rect id="46" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse18TextCoords.x}" y="${klasse18TextCoords.y}">46</text>
                    </svg>
                    <svg width="96px" height="160px" x="96px" y="0">
                        <rect id="47" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse18TextCoords.x}" y="${klasse18TextCoords.y}">47</text>
                    </svg>
                </g>

                <!-- Kontor -->
                <g>
                    <svg width="96px" height="160px" x="192px" y="0">
                        <rect width="100%" height="100%" fill="cornflowerblue" opacity="50%"/>
                        <rect width="100%" height="100%" stroke="black" stroke-width="2" fill="transparent"/>
                        <text x="35%" y="55%">Kontor</text>
                    </svg>
                </g>
            </svg>

            <!-- Nederst høyre -->
            <svg width="1328px" height="144px" x="672px" y="1712px">
                <!-- Klasse 21 -->
                <svg width="192px" height="144px" x="0" y="0">
                    <rect id="320" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                    <text x="40%" y="50%">320</text>
                </svg>

                <!-- Klasse 19 -->
                <svg width="176px" height="144px" x="192px" y="0">
                    <rect id="319" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                    <text x="40%" y="50%">319</text>
                </svg>

                <!-- Klasse 4 -->
                <g>
                    <svg width="48px" height="64px" x="368px" y="0">
                        <rect id="318" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse4TextCoords.x}" y="${klasse4TextCoords.y}">318</text>
                    </svg>
                    <svg width="48px" height="64px" x="416px" y="0">
                        <rect id="317" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse4TextCoords.x}" y="${klasse4TextCoords.y}">317</text>
                    </svg>
                    <svg width="48px" height="64px" x="464px" y="0">
                        <rect id="316" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse4TextCoords.x}" y="${klasse4TextCoords.y}">316</text>
                    </svg>
                    <svg width="48px" height="64px" x="512px" y="0">
                        <rect id="315" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse4TextCoords.x}" y="${klasse4TextCoords.y}">315</text>
                    </svg>
                </g>
            </svg>

            <!-- Høyre vegg -->
            <svg width="1232px" height="48px" x="0" y="0">
                <!-- Klasse 9 -->
                <g>
                    <svg width="96px" height="48px" x="0" y="0">
                        <rect id="121" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="15%" y="${klasse9TextCoords.y}">121</text>
                    </svg>
                </g>
                <!-- Klasse 3 -->
                <g>
                    <svg width="48px" height="48px" x="96px" y="0">
                        <rect id="122" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">122</text>
                    </svg>
                    <svg width="48px" height="48px" x="144px" y="0">
                        <rect id="123" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">123</text>
                    </svg>
                    <svg width="48px" height="48px" x="192px" y="0">
                        <rect id="124" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">124</text>
                    </svg>
                    <svg width="48px" height="48px" x="240px" y="0">
                        <rect id="125" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="${klasse3TextCoords.y}">125</text>
                    </svg>
                    <svg width="48px" height="48px" x="512px" y="0">
                        <rect id="128" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">128</text>
                    </svg>
                    <svg width="48px" height="48px" x="560px" y="0">
                        <rect id="129" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">129</text>
                    </svg>
                    <svg width="48px" height="48px" x="608px" y="0">
                        <rect id="130" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">130</text>
                    </svg>
                    <svg width="48px" height="48px" x="928px" y="0">
                        <rect id="282" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">282</text>
                    </svg>
                    <svg width="48px" height="48px" x="976px" y="0">
                        <rect id="283" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">283</text>
                    </svg>
                    <svg width="48px" height="48px" x="1024px" y="0">
                        <rect id="284" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">284</text>
                    </svg>
                    <svg width="48px" height="48px" x="1072px" y="0">
                        <rect id="285" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">285</text>
                    </svg>
                    <svg width="48px" height="48px" x="1120px" y="0">
                        <rect id="286" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">286</text>
                    </svg>
                </g>
                <!-- Klasse 7 -->
                <g>
                    <svg width="80px" height="48px" x="288px" y="0">
                        <rect id="126" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="50%">126</text>
                    </svg>
                </g>

                <!-- Klasse 5 -->
                <g>
                    <svg width="64px" height="48px" x="448px" y="0">
                        <rect id="127" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="50%">127</text>
                    </svg>
                </g>

                <!-- Klasse 2 -->
                <g>
                    <svg width="32px" height="48px" x="656px" y="0">
                        <rect id="280" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="70%">280</text>
                    </svg>
                </g>

                <!-- Klasse 6 -->
                <g>
                    <svg width="64px" height="48px" x="752px" y="0">
                        <rect id="281" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="55%">281</text>
                    </svg>
                    <svg width="64px" height="48px" x="1168px" y="0">
                        <rect id="287" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="55%">287</text>
                    </svg>
                </g>
            </svg>

            <!-- Rad 1 -->
            <svg width="96px" height="1696px" x="0" y="48px">
                <!-- Klasse 12 -->
                <g>
                    <svg width="96px" height="80px" x="0" y="1616px">
                        <rect id="1" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="40%" y="55%">1</text>
                    </svg>
                </g>

                <!-- Klasse 14 -->
                <g>
                    <svg width="96px" height="96px" x="0" y="1520px">
                        <rect id="2" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">2</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1424px">
                        <rect id="3" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">3</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1328px">
                        <rect id="4" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">4</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1232px">
                        <rect id="5" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">5</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1136px">
                        <rect id="6" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">6</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1040px">
                        <rect id="7" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">7</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="944px">
                        <rect id="8" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">8</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="688px">
                        <rect id="11" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">11</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="592px">
                        <rect id="12" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">12</text>
                    </svg>
                </g>

                <!-- Bod 9 -->
                <g>
                    <svg width="96px" height="112px" x="0" y="832px">
                        <rect id="9" width="100%" height="100%" stroke="black" stroke-width="2" fill="pink"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">9</text>
                    </svg>
                </g>

                <!-- Klasse 8 -->
                <g>
                    <svg width="96px" height="48px" x="0" y="784px">
                        <rect id="10" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">10</text>
                    </svg>
                </g>

                <!-- Klasse 9 -->
                <g>
                    <svg width="96px" height="48px" x="0" y="544px">
                        <rect id="13" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">13</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="496px">
                        <rect id="14" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">14</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="448px">
                        <rect id="15" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">15</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="400px">
                        <rect id="16" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">16</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="352px">
                        <rect id="17" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">17</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="304px">
                        <rect id="18" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">18</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="256px">
                        <rect id="19" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">19</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="208px">
                        <rect id="20" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">20</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="160px">
                        <rect id="21" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">21</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="112px">
                        <rect id="22" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">22</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="64">
                        <rect id="23" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">23</text>
                    </svg>
                </g>

                <!-- Klasse 3 -->
                <g>
                    <svg width="48px" height="64px" x="0" y="0">
                        <rect id="24" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="60%">24</text>
                    </svg>
                </g>
            </svg>

            <!-- Rad 2 -->
            <svg width="192px" height="1648px" x="160px" y="112px">
                <!-- Klasse 14 over -->
                <g>
                    <svg width="96px" height="96px" x="0" y="1552px">
                        <rect id="48" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">48</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1456px">
                        <rect id="45" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">45</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1360px">
                        <rect id="44" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">44</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1264px">
                        <rect id="43" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">43</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1168px">
                        <rect id="42" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">42</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1072px">
                        <rect id="41" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">41</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="976px">
                        <rect id="40" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">40</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="880px">
                        <rect id="39" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">39</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="784px">
                        <rect id="38" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">38</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="688px">
                        <rect id="37" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">37</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="592px">
                        <rect id="36" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">36</text>
                    </svg>
                </g>

                <!-- Klasse 14 under -->
                <g>
                    <svg width="96px" height="96px" x="96px" y="1552px">
                        <rect id="49" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">49</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="1456px">
                        <rect id="50" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">50</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="1360px">
                        <rect id="51" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">51</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="1264px">
                        <rect id="52" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">52</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="1168px">
                        <rect id="53" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">53</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="1072px">
                        <rect id="54" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">54</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="976px">
                        <rect id="55" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">55</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="880px">
                        <rect id="56" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">56</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="784px">
                        <rect id="57" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">57</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="688px">
                        <rect id="58" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">58</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="592px">
                        <rect id="59" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">59</text>
                    </svg>
                </g>

                <!-- Klasse 10 -->
                <g>
                    <svg width="96px" height="64px" x="0" y="528px">
                        <rect id="35" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="35%" y="55%">35</text>
                    </svg>
                    <svg width="96px" height="64px" x="96px" y="528px">
                        <rect id="60" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="35%" y="55%">60</text>
                    </svg>
                </g>

                <!-- Klasse 9 over -->
                <g>
                    <svg width="96px" height="48px" x="0" y="480px">
                        <rect id="34" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">34</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="432px">
                        <rect id="33" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">33</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="384px">
                        <rect id="32" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">32</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="336px">
                        <rect id="31" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">31</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="288px">
                        <rect id="30" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">30</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="240px">
                        <rect id="29" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">29</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="192px">
                        <rect id="28" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">28</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="144px">
                        <rect id="27" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">27</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="96px">
                        <rect id="26" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">26</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="48px">
                        <rect id="25" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">25</text>
                    </svg>
                </g>

                <!-- Klasse 9 under -->
                <g>
                    <svg width="96px" height="48px" x="96px" y="480px">
                        <rect id="61" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">61</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="432px">
                        <rect id="62" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">62</text>
                    </svg>

                    <svg width="96px" height="48px" x="96px" y="384px">
                        <rect id="63" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">63</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="336px">
                        <rect id="64" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">64</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="288px">
                        <rect id="65" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">65</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="240px">
                        <rect id="66" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">66</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="192px">
                        <rect id="67" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">67</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="144px">
                        <rect id="68" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">68</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="96px">
                        <rect id="69" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">69</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="48px">
                        <rect id="70" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">70</text>
                    </svg>
                </g>

                <!-- Klasse 3 -->
                <g>
                    <svg width="48px" height="48px" x="0" y="0px">
                        <rect id="120" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">120</text>
                    </svg>
                    <svg width="48px" height="48px" x="48px" y="0px">
                        <rect id="119" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">119</text>
                    </svg>
                    <svg width="48px" height="48px" x="96px" y="0px">
                        <rect id="118" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">118</text>
                    </svg>
                    <svg width="48px" height="48px" x="144px" y="0px">
                        <rect id="117" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">117</text>
                    </svg>
                </g>

            </svg>
            

            <!-- Rad 3 -->
            <svg width="192px" height="1648px" x="416px" y="112px">
                <!-- Klasse 18 -->
                <g>
                    <svg width="96px" height="160px" x="0" y="1488px">
                        <rect id="91" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="45%" y="55%">91</text>
                    </svg>
                    <svg width="96px" height="160px" x="96px" y="1488px">
                        <rect id="92" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="45%" y="55%">92</text>
                    </svg>
                </g>

                <!-- Klasse 19 -->
                <g>
                    <svg width="192px" height="96px" x="0" y="1392px">
                        <rect id="90" width="192px" height="96px" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="58%">90</text>
                        <text x="68%" y="58%">93</text>
                        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black" stroke-dasharray="3" stroke-width="1"/>
                    </svg>
                    <svg width="192px" height="96px" x="0" y="1296px">
                        <rect id="89" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="58%">89</text>
                        <text x="68%" y="58%">94</text>
                        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black" stroke-dasharray="3" stroke-width="1"/>
                    </svg>
                    <svg width="192px" height="96px" x="0" y="1200px">
                        <rect id="88" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="58%">88</text>
                        <text x="68%" y="58%">95</text>
                        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black" stroke-dasharray="3" stroke-width="1"/>
                    </svg>
                    <svg width="192px" height="96px" x="0" y="1104px">
                        <rect id="87" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="20%" y="58%">87</text>
                        <text x="68%" y="58%">96</text>
                        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black" stroke-dasharray="3" stroke-width="1"/>
                    </svg>
                </g>

                <!-- Klasse 14 over -->
                <g>
                    <svg width="96px" height="96px" x="0" y="1008px">
                        <rect id="86" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">86</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="912px">
                        <rect id="85" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">85</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="816px">
                        <rect id="84" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">84</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="720px">
                        <rect id="83" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">83</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="624px">
                        <rect id="82" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">82</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="528px">
                        <rect id="81" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">81</text>
                    </svg>
                </g>

                <!-- Klasse 14 under -->
                <g>
                    <svg width="96px" height="96px" x="96px" y="1008px">
                        <rect id="97" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">97</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="912px">
                        <rect id="98" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">98</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="816px">
                        <rect id="99" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x}" y="${klasse14TextCoords.y}">99</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="720px">
                        <rect id="100" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="35%" y="${klasse14TextCoords.y}">100</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="624px">
                        <rect id="101" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="35%" y="${klasse14TextCoords.y}">101</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="528px">
                        <rect id="102" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="35%" y="${klasse14TextCoords.y}">102</text>
                    </svg>
                </g>

                <!-- Klassse 9 over -->
                <g>
                    <svg width="96px" height="48px" x="0" y="480px">
                        <rect id="80" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">80</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="432px">
                        <rect id="79" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">79</text>
                    </svg>

                    <svg width="96px" height="48px" x="0" y="384px">
                        <rect id="78" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">78</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="336px">
                        <rect id="77" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">77</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="288px">
                        <rect id="76" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">76</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="240px">
                        <rect id="75" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">75</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="192px">
                        <rect id="74" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">74</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="144px">
                        <rect id="73" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">73</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="96px">
                        <rect id="72" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">72</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="48px">
                        <rect id="71" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x}" y="${klasse9TextCoords.y}">71</text>
                    </svg>
                </g>

                <!-- Klasse 9 under -->
                <g>
                    <svg width="96px" height="48px" x="96px" y="480px">
                        <rect id="103" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">103</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="432px">
                        <rect id="104" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">104</text>
                    </svg>

                    <svg width="96px" height="48px" x="96px" y="384px">
                        <rect id="105" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">105</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="336px">
                        <rect id="106" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">106</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="288px">
                        <rect id="107" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">107</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="240px">
                        <rect id="108" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">108</text>
                    </svg>

                    <svg width="96px" height="48px" x="96px" y="192px">
                        <rect id="109" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">109</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="144px">
                        <rect id="110" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">110</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="96px">
                        <rect id="111" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">111</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="48px">
                        <rect id="112" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">112</text>
                    </svg>
                </g>

                <!-- Klasse 3 -->
                <g>
                    <svg width="48px" height="48px" x="0" y="0px">
                        <rect id="116" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">116</text>
                    </svg>
                    <svg width="48px" height="48px" x="48px" y="0">
                        <rect id="115" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">115</text>
                    </svg>
                    <svg width="48px" height="48px" x="96px" y="0">
                        <rect id="114" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">114</text>
                    </svg>
                    <svg width="48px" height="48px" x="144px" y="0">
                        <rect id="113" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">113</text>
                    </svg>
                </g>
            </svg>


            <!-- Rad 4 -->
            <svg width="240px" height="1536px" x="672px" y="112px">
                <!-- Klasse 17 og 20 -->
                <g>
                    <svg width="96px" height="144px" x="0px" y="1392px">
                        <rect id="216" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="38%" y="55%">216</text>
                    </svg>
                    <svg width="144px" height="144px" x="96px" y="1392px">
                        <rect id="217" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="38%" y="50%">217</text>
                    </svg>
                </g>

                <!-- Klasse 17 -->
                <g>
                    <svg width="144px" height="96px" x="0" y="1296px">
                        <rect id="215" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">215</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="1200px">
                        <rect id="214" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">214</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="1104px">
                        <rect id="213" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">213</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="1008px">
                        <rect id="212" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">212</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="912px">
                        <rect id="211" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">211</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="816px">
                        <rect id="210" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">210</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="720px">
                        <rect id="209" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">209</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="624px">
                        <rect id="208" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">208</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="528px">
                        <rect id="207" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">207</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="432px">
                        <rect id="206" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">206</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="336px">
                        <rect id="205" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">205</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="240px">
                        <rect id="204" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">204</text>
                    </svg>
                    <svg width="144px" height="96px" x="0" y="144px">
                        <rect id="203" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="30%" y="55%">203</text>
                    </svg>
                </g>

                <!-- Klasse 11 -->
                <g>
                    <svg width="144px" height="48px" x="0" y="96px">
                        <rect id="202" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="15%" y="55%">202</text>
                    </svg>
                </g>

                <!-- Klasse 9 -->
                <g>
                    <svg width="96px" height="48px" x="0" y="48px">
                        <rect id="201" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="50%">201</text>
                    </svg>
                    <svg width="48px" height="96px" x="96px" y="0">
                        <rect id="277" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="33%" y="60%">277</text>
                    </svg>

                    <svg width="96px" height="48px" x="144px" y="384px">
                        <rect id="228" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">228</text>
                    </svg>
                    <svg width="96px" height="48px" x="144px" y="336px">
                        <rect id="229" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">229</text>
                    </svg>
                    <svg width="96px" height="48px" x="144px" y="288px">
                        <rect id="230" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">230</text>
                    </svg>
                    <svg width="96px" height="48px" x="144px" y="240px">
                        <rect id="231" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">231</text>
                    </svg>
                    <svg width="96px" height="48px" x="144px" y="192px">
                        <rect id="232" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">232</text>
                    </svg>
                    <svg width="96px" height="48px" x="144px" y="144px">
                        <rect id="233" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">233</text>
                    </svg>
                    <svg width="96px" height="48px" x="144px" y="96px">
                        <rect id="234" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">234</text>
                    </svg>
                    <svg width="96px" height="48px" x="144px" y="48px">
                        <rect id="235" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">235</text>
                    </svg>
                </g>

                <!-- Klasse 3 -->
                <g>
                    <svg width="48px" height="48px" x="0" y="0px">
                        <rect id="279" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">279</text>
                    </svg>
                    <svg width="48px" height="48px" x="48px" y="0">
                        <rect id="278" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">278</text>
                    </svg>
                    <svg width="48px" height="48px" x="144px" y="0px">
                        <rect id="276" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">276</text>
                    </svg>
                    <svg width="48px" height="48px" x="192px" y="0">
                        <rect id="275" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse3TextCoords.x}" y="60%">275</text>
                    </svg>
                </g>

                <!-- Klasse 14 -->
                <g>
                    <svg width="96px" height="96px" x="144px" y="1296px">
                        <rect id="218" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">218</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="1200px">
                        <rect id="219" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">219</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="1104px">
                        <rect id="220" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">220</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="1008px">
                        <rect id="221" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">221</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="912px">
                        <rect id="222" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">222</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="816px">
                        <rect id="223" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">223</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="720px">
                        <rect id="224" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">224</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="624px">
                        <rect id="225" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">225</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="528px">
                        <rect id="226" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">226</text>
                    </svg>
                    <svg width="96px" height="96px" x="144px" y="432px">
                        <rect id="227" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">227</text>
                    </svg>
                </g>

            </svg>


            <!-- Rad 5 -->
            <svg width="192px" height="1536px" x="976px" y="112px">
                <!-- Klasse 17 -->
                <g>
                    <svg width="96px" height="144px" x="0" y="1392px">
                        <rect id="253" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="38%" y="55%">253</text>
                    </svg>
                    <svg width="96px" height="144px" x="96px" y="1392px">
                        <rect id="254" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="38%" y="55%">254</text>
                    </svg>
                </g>

                <!-- Klasse 19 -->
                <g>
                    <svg width="192px" height="96px" x="0" y="1296px">
                        <rect id="252" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="32%" y="53%">252</text>
                    </svg>
                    <svg width="96px" height="192px" x="0" y="1104px">
                        <rect id="251" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="42%" y="55%">251</text>
                    </svg>
                    <svg width="192px" height="96px" x="0" y="1008px">
                        <rect id="250" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="32%" y="53%">250</text>
                    </svg>
                </g>

                <!-- Klasse 14 over -->
                <g>
                    <svg width="96px" height="96px" x="0" y="912px">
                        <rect id="249" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">249</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="816px">
                        <rect id="248" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">248</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="720px">
                        <rect id="247" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">247</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="624px">
                        <rect id="246" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">246</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="528px">
                        <rect id="245" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">245</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="432px">
                        <rect id="244" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">244</text>
                    </svg>
                </g>

                <!-- Klasse 14 under -->
                <g>
                    <svg width="96px" height="96px" x="96px" y="1200px">
                        <rect id="255" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">255</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="1104px">
                        <rect id="256" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">256</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="912px">
                        <rect id="257" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">257</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="816px">
                        <rect id="258" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">258</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="720px">
                        <rect id="259" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">259</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="624px">
                        <rect id="260" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">260</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="528px">
                        <rect id="261" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">261</text>
                    </svg>
                    <svg width="96px" height="96px" x="96px" y="432px">
                        <rect id="262" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">262</text>
                    </svg>
                </g>

                <!-- Klasse 9 Over -->
                <g>
                    <svg width="96px" height="48px" x="0" y="384px">
                        <rect id="243" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">243</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="336px">
                        <rect id="242" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">242</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="288px">
                        <rect id="241" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">241</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="240px">
                        <rect id="240" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">240</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="192px">
                        <rect id="239" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">239</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="144px">
                        <rect id="238" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">238</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="96px">
                        <rect id="237" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">237</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="48px">
                        <rect id="236" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">236</text>
                    </svg>
                </g>

                <!-- Klasse 9 under -->
                <g>
                    <svg width="96px" height="48px" x="96px" y="384px">
                        <rect id="263" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">263</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="336px">
                        <rect id="264" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">264</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="288px">
                        <rect id="265" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">265</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="240px">
                        <rect id="266" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">266</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="192px">
                        <rect id="267" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">267</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="144px">
                        <rect id="268" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">268</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="96px">
                        <rect id="269" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">269</text>
                    </svg>
                    <svg width="96px" height="48px" x="96px" y="48px">
                        <rect id="270" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">270</text>
                    </svg>
                </g>

                <!-- Klasse 3 -->
                <g>
                    <svg width="48px" height="48px" x="0" y="0px">
                        <rect id="274" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">274</text>
                    </svg>
                    <svg width="48px" height="48px" x="48px" y="0">
                        <rect id="273" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">273</text>
                    </svg>
                    <svg width="48px" height="48px" x="96px" y="0">
                        <rect id="272" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">272</text>
                    </svg>
                    <svg width="48px" height="48px" x="144px" y="0">
                        <rect id="271" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="17%" y="60%">271</text>
                    </svg>
                </g>

            </svg>


            <!-- Rad 6 -->
            <svg width="96px" height="1712px" x="1232px" y="0">
                <!-- Trapp -->
                <svg x="0" y="0">
                    <rect width="100%" height="100%" fill="beige"/>
                    <svg id="trapp-ikon" xmlns="http://www.w3.org/2000/svg" x="50%" y="97%" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/><g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M18,8h-2.42v3.33H13v3.33h-2.58 V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18V8z"/></g></g></g></svg>
                    <line x1="0" x2="0" y1="0" y2="100%" stroke="black" stroke-width="2"/>
                    <line x1="0" x2="100%" y1="100%" y2="100%" stroke="black" stroke-width="2"/>
                </svg>

                <!-- Klasse 1 -->
                <g>
                    <svg width="48px" height="48px" x="0" y="1600px">
                        <rect id="314" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="15%" y="65%">314</text>
                    </svg>
                    <svg width="48px" height="48px" x="0" y="1552px">
                        <rect id="313" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="15%" y="65%">313</text>
                    </svg>
                </g>

                <!-- Klasse 6 -->
                <svg width="48px" height="64px" x="0" y="1488px">
                    <rect id="312" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                    <text x="20%" y="65%">312</text>
                </svg>

                <!-- Klasse 10 -->
                <g>
                    <svg width="96px" height="64px" x="0" y="1424px">
                        <rect id="311" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="25%" y="55%">311</text>
                    </svg>
                    <svg width="96px" height="64px" x="0" y="1360px">
                        <rect id="310" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="25%" y="55%">310</text>
                    </svg>
                </g>

                <!-- Klasse 14 -->
                <g>
                    <svg width="96px" height="96px" x="0" y="1264px">
                        <rect id="309" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">309</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1168px">
                        <rect id="308" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">308</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="1072px">
                        <rect id="307" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">307</text>
                    </svg>
                    <svg width="96px" height="96px" x="0" y="976px">
                        <rect id="306" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">306</text>
                    </svg>
                </g>


                <!-- Bod 305 -->
                <svg width="96px" height="96px" x="0" y="880px">
                    <rect id="305" width="100%" height="100%" stroke="black" stroke-width="2" fill="pink"/>
                    <text x="${klasse14TextCoords.x2}" y="${klasse14TextCoords.y}">305</text>
                </svg>

                <!-- Klasse 9 -->
                <g>
                    <svg width="96px" height="48px" x="0" y="832px">
                        <rect id="304" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">304</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="784px">
                        <rect id="303" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">303</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="736px">
                        <rect id="302" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">302</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="688px">
                        <rect id="301" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">301</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="640px">
                        <rect id="300" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">300</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="592px">
                        <rect id="299" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">299</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="544px">
                        <rect id="298" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">298</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="496px">
                        <rect id="297" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">297</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="448px">
                        <rect id="296" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">296</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="400px">
                        <rect id="295" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">295</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="352px">
                        <rect id="294" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">294</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="304px">
                        <rect id="293" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">293</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="256px">
                        <rect id="292" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">292</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="208px">
                        <rect id="291" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">291</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="160px">
                        <rect id="290" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">290</text>
                    </svg>
                    <svg width="96px" height="48px" x="0" y="112px">
                        <rect id="289" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                        <text x="${klasse9TextCoords.x2}" y="${klasse9TextCoords.y}">289</text>
                    </svg>
                </g>


                <!-- Klasse 13 -->
                <svg width="96px" height="112px" x="0" y="0">
                    <rect id="288" width="100%" height="100%" stroke="black" stroke-width="2" fill="white"/>
                    <text x="35%" y="55%" >288</text>
                </svg>
            </svg>
        </svg>
    `
    return kart;
}