export function HeroFilm() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="lf-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#03051A"></stop>
<stop offset=".48" stopColor="#0A0F35"></stop>
<stop offset=".64" stopColor="#1A256E"></stop>
<stop offset=".69" stopColor="#0D1340"></stop>
<stop offset="1" stopColor="#04061A"></stop>
</linearGradient>
<radialGradient id="lf-portglow" cx="1180" cy="600" r="560" gradientUnits="userSpaceOnUse">
<stop offset="0" stopColor="#4E5FF0" stopOpacity=".55"></stop>
<stop offset=".45" stopColor="#2A36A8" stopOpacity=".2"></stop>
<stop offset="1" stopColor="#0A0F35" stopOpacity="0"></stop>
</radialGradient>
<radialGradient id="lf-lamp">
<stop offset="0" stopColor="#FFE2B0" stopOpacity=".9"></stop>
<stop offset=".25" stopColor="#FFB869" stopOpacity=".32"></stop>
<stop offset="1" stopColor="#FFB869" stopOpacity="0"></stop>
</radialGradient>
<radialGradient id="lf-cool">
<stop offset="0" stopColor="#C9D4FF" stopOpacity=".8"></stop>
<stop offset=".3" stopColor="#7C8BFF" stopOpacity=".25"></stop>
<stop offset="1" stopColor="#7C8BFF" stopOpacity="0"></stop>
</radialGradient>
<linearGradient id="lf-cone" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#FFE7C2" stopOpacity=".32"></stop>
<stop offset="1" stopColor="#FFE7C2" stopOpacity="0"></stop>
</linearGradient>
<linearGradient id="lf-road" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#101646"></stop>
<stop offset="1" stopColor="#070A24"></stop>
</linearGradient>
<linearGradient id="lf-water" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#0E1548"></stop>
<stop offset="1" stopColor="#060924"></stop>
</linearGradient>
<pattern id="lf-boxes" width="120" height="32" y="7" patternUnits="userSpaceOnUse">
<rect x="0" y="0" width="29" height="15" fill="#1C2763"></rect>
<rect x="30" y="0" width="29" height="15" fill="#2A2F6E"></rect>
<rect x="60" y="0" width="29" height="15" fill="#16205A"></rect>
<rect x="90" y="0" width="29" height="15" fill="#33306A"></rect>
<rect x="0" y="16" width="29" height="15" fill="#232C70"></rect>
<rect x="30" y="16" width="29" height="15" fill="#18215C"></rect>
<rect x="60" y="16" width="29" height="15" fill="#3A3466"></rect>
<rect x="90" y="16" width="29" height="15" fill="#1E2A6A"></rect>
</pattern>
<pattern id="lf-yard" width="102" height="28" y="10" patternUnits="userSpaceOnUse">
<rect x="0" y="0" width="33" height="13" fill="#1A2460"></rect>
<rect x="34" y="0" width="33" height="13" fill="#2B2C66"></rect>
<rect x="68" y="0" width="33" height="13" fill="#141C52"></rect>
<rect x="0" y="14" width="33" height="13" fill="#222A6A"></rect>
<rect x="34" y="14" width="33" height="13" fill="#161F58"></rect>
<rect x="68" y="14" width="33" height="13" fill="#302E62"></rect>
</pattern>
<filter id="lf-glowf" x="-20%" y="-20%" width="140%" height="140%">
<feGaussianBlur stdDeviation="2.4" result="b"></feGaussianBlur>
<feMerge><feMergeNode in="b"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
</filter>
<filter id="lf-soft" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="16"></feGaussianBlur></filter>
</defs>


<rect width="1600" height="900" fill="url(#lf-sky)"></rect>
<ellipse cx="1120" cy="430" rx="420" ry="44" fill="#1B2470" opacity=".35" filter="url(#lf-soft)"></ellipse>
<ellipse cx="420" cy="300" rx="320" ry="30" fill="#1B2470" opacity=".22" filter="url(#lf-soft)"></ellipse>
<rect width="1600" height="900" fill="url(#lf-portglow)"></rect>


<path d="M520 602 V590 H560 V580 H600 V592 H660 V574 H672 V560 H678 V574 H720 V586 H780 V596 H1380 V588 A24 6 0 0 1 1428 588 V596 H1440 V586 A20 5 0 0 1 1480 586 V596 H1600 V602 Z" fill="#0A0F36"></path>


<rect x="0" y="600" width="1600" height="48" fill="url(#lf-water)"></rect>
<g className="lf-shimmer">
<rect x="1110" y="616" width="64" height="1.5" fill="#FFC98A" opacity=".45"></rect>
<rect x="1128" y="624" width="38" height="1.2" fill="#FFC98A" opacity=".3"></rect>
<rect x="1300" y="618" width="46" height="1.5" fill="#9FB0FF" opacity=".4"></rect>
<rect x="940" y="620" width="52" height="1.2" fill="#9FB0FF" opacity=".3"></rect>
<rect x="1296" y="630" width="22" height="1" fill="#FFC98A" opacity=".3"></rect>
</g>


<g className="lf-drift">
<path d="M870 583 V551 H930 V535 H1020 V551 H1080 V519 H1170 V535 H1230 V551 H1290 V583 Z" fill="url(#lf-boxes)"></path>
<path d="M836 583 H1342 L1330 610 H858 Z" fill="#090D2E"></path>
<rect x="836" y="583" width="506" height="2" fill="#2C3790" opacity=".6"></rect>
<rect x="1298" y="523" width="38" height="60" fill="#0B1036"></rect>
<rect x="1294" y="519" width="46" height="6" fill="#0D1440"></rect>
<rect x="1302" y="530" width="30" height="2.5" fill="#FFD7A0" opacity=".65"></rect>
<rect x="1302" y="542" width="30" height="2" fill="#FFD7A0" opacity=".35"></rect>
<rect x="1316" y="498" width="2" height="22" fill="#0D1440"></rect>
<circle cx="1317" cy="497" r="2.2" fill="#FF5468" className="lf-blink2"></circle>
<circle cx="842" cy="580" r="1.8" fill="#9FB0FF" opacity=".8"></circle>
</g>


<rect x="0" y="640" width="1600" height="260" fill="#05081F"></rect>
<rect x="760" y="640" width="840" height="20" fill="#080C2C"></rect>
<rect x="760" y="640" width="840" height="1.5" fill="#2C3790" opacity=".55"></rect>
<path d="M1326 640 V612 H1428 V598 H1530 V612 H1600 V640 Z" fill="url(#lf-yard)"></path>


<g transform="translate(980 642)">
<polygon points="-48,0 -40,0 -30,-238 -36,-238" fill="#090E30"></polygon>
<polygon points="40,0 48,0 36,-238 30,-238" fill="#090E30"></polygon>
<rect x="-40" y="-246" width="80" height="10" fill="#0B1236"></rect>
<rect x="-44" y="-128" width="88" height="6" fill="#0B1236"></rect>
<path d="M-42 -122 L34 -236 M42 -122 L-34 -236" stroke="#0B1236" strokeWidth="3" fill="none"></path>
<rect x="-210" y="-262" width="330" height="9" fill="#0C1338"></rect>
<path d="M-26 -262 L0 -330 L26 -262 M0 -330 L-206 -262 M0 -330 L116 -262" stroke="#0C1338" strokeWidth="3" fill="none"></path>
<rect x="8" y="-286" width="44" height="22" rx="2" fill="#0C1338"></rect>
<rect x="14" y="-279" width="30" height="2.5" fill="#FFCF8F" opacity=".5"></rect>
<polygon points="-150,-253 -196,0 -104,0" fill="url(#lf-cone)" opacity=".5"></polygon>
<circle cx="-150" cy="-252" r="2" fill="#FFE7C2"></circle>
<circle cx="0" cy="-332" r="2.6" fill="#FF5468" className="lf-blink"></circle>
<circle cx="-208" cy="-265" r="2.2" fill="#FF5468" className="lf-blink2"></circle>
</g>
<g transform="translate(1150 642)">
<polygon points="-48,0 -40,0 -30,-238 -36,-238" fill="#090E30"></polygon>
<polygon points="40,0 48,0 36,-238 30,-238" fill="#090E30"></polygon>
<rect x="-40" y="-246" width="80" height="10" fill="#0B1236"></rect>
<rect x="-44" y="-128" width="88" height="6" fill="#0B1236"></rect>
<path d="M-42 -122 L34 -236 M42 -122 L-34 -236" stroke="#0B1236" strokeWidth="3" fill="none"></path>
<rect x="-210" y="-262" width="330" height="9" fill="#0C1338"></rect>
<path d="M-26 -262 L0 -330 L26 -262 M0 -330 L-206 -262 M0 -330 L116 -262" stroke="#0C1338" strokeWidth="3" fill="none"></path>
<rect x="8" y="-286" width="44" height="22" rx="2" fill="#0C1338"></rect>
<rect x="14" y="-279" width="30" height="2.5" fill="#FFCF8F" opacity=".5"></rect>
<polygon points="-80,-253 -126,0 -34,0" fill="url(#lf-cone)" opacity=".55"></polygon>
<rect x="-132" y="-256" width="24" height="6" fill="#121A48"></rect>
<rect x="-121" y="-250" width="1.6" height="40" fill="#3A4590" className="lf-cable"></rect>
<g className="lf-spreader">
<rect x="-136" y="-210" width="32" height="4" fill="#1A2468"></rect>
<rect x="-134" y="-206" width="28" height="15" fill="#2E3A86"></rect>
</g>
<circle cx="-80" cy="-252" r="2" fill="#FFE7C2"></circle>
<circle cx="0" cy="-332" r="2.6" fill="#FF5468" className="lf-blink2"></circle>
<circle cx="-208" cy="-265" r="2.2" fill="#FF5468" className="lf-blink"></circle>
</g>
<g transform="translate(1310 642)">
<polygon points="-48,0 -40,0 -30,-238 -36,-238" fill="#090E30"></polygon>
<polygon points="40,0 48,0 36,-238 30,-238" fill="#090E30"></polygon>
<rect x="-40" y="-246" width="80" height="10" fill="#0B1236"></rect>
<rect x="-44" y="-128" width="88" height="6" fill="#0B1236"></rect>
<path d="M-42 -122 L34 -236 M42 -122 L-34 -236" stroke="#0B1236" strokeWidth="3" fill="none"></path>
<rect x="-210" y="-262" width="330" height="9" fill="#0C1338"></rect>
<path d="M-26 -262 L0 -330 L26 -262 M0 -330 L-206 -262 M0 -330 L116 -262" stroke="#0C1338" strokeWidth="3" fill="none"></path>
<rect x="8" y="-286" width="44" height="22" rx="2" fill="#0C1338"></rect>
<polygon points="-170,-253 -214,0 -126,0" fill="url(#lf-cone)" opacity=".4"></polygon>
<circle cx="-170" cy="-252" r="2" fill="#FFE7C2"></circle>
<circle cx="0" cy="-332" r="2.6" fill="#FF5468" className="lf-blink"></circle>
<circle cx="-208" cy="-265" r="2.2" fill="#FF5468" className="lf-blink2"></circle>
</g>


<path d="M596 574 L750 556 L904 574 Z" fill="#0C1236"></path>
<rect x="600" y="574" width="300" height="70" fill="#0A0E31"></rect>
<rect x="600" y="574" width="300" height="1.5" fill="#26307C" opacity=".6"></rect>
<g className="lf-shimmer">
<rect x="618" y="612" width="32" height="30" fill="#E7B676" opacity=".28"></rect>
<rect x="664" y="612" width="32" height="30" fill="#E7B676" opacity=".22"></rect>
<rect x="710" y="612" width="32" height="30" fill="#E7B676" opacity=".3"></rect>
<rect x="756" y="612" width="32" height="30" fill="#E7B676" opacity=".2"></rect>
<rect x="802" y="612" width="32" height="30" fill="#E7B676" opacity=".26"></rect>
<rect x="848" y="612" width="32" height="30" fill="#E7B676" opacity=".22"></rect>
</g>
<rect x="662" y="620" width="36" height="24" fill="#070A26"></rect>
<rect x="800" y="620" width="36" height="24" fill="#070A26"></rect>
<circle cx="665" cy="641" r="1.4" fill="#FF6B5A"></circle><circle cx="695" cy="641" r="1.4" fill="#FF6B5A"></circle>
<circle cx="803" cy="641" r="1.4" fill="#FF6B5A"></circle><circle cx="833" cy="641" r="1.4" fill="#FF6B5A"></circle>
<ellipse cx="750" cy="648" rx="170" ry="12" fill="url(#lf-lamp)" opacity=".5"></ellipse>


<path d="M1192 652 Q1010 760 700 900 L1600 900 Q1420 760 1218 652 Z" fill="url(#lf-road)"></path>
<path d="M1192 652 Q1010 760 700 900" fill="none" stroke="#2A3586" strokeOpacity=".55" strokeWidth="1.5"></path>
<path d="M1218 652 Q1420 760 1600 900" fill="none" stroke="#2A3586" strokeOpacity=".55" strokeWidth="1.5"></path>
<path d="M1205 652 Q1180 780 1130 900" fill="none" stroke="#3B4699" strokeOpacity=".5" strokeWidth="2" strokeDasharray="12 16" className="lf-flow"></path>


<g filter="url(#lf-glowf)">
<path d="M1198 653 Q1090 770 860 900" stroke="#DCE4FF" strokeOpacity=".1" strokeWidth="1" className="lf-trail"></path>
<path d="M1201 653 Q1130 780 990 900" stroke="#DCE4FF" strokeOpacity=".1" strokeWidth="1" className="lf-trail"></path>
<path d="M1210 653 Q1270 780 1300 900" stroke="#FF4A5C" strokeOpacity=".12" strokeWidth="1" className="lf-trail"></path>
<path d="M1213 653 Q1330 770 1450 900" stroke="#FF4A5C" strokeOpacity=".12" strokeWidth="1" className="lf-trail"></path>
<path d="M1198 653 Q1090 770 860 900" stroke="#EAF0FF" strokeWidth="2.4" className="lf-trail lf-in"></path>
<path d="M1198 653 Q1090 770 860 900" stroke="#EAF0FF" strokeWidth="2" className="lf-trail lf-in lf-t2"></path>
<path d="M1201 653 Q1130 780 990 900" stroke="#C9D4FF" strokeWidth="2.2" className="lf-trail lf-in lf-t3"></path>
<path d="M1201 653 Q1130 780 990 900" stroke="#FFE2B0" strokeWidth="2" className="lf-trail lf-in lf-t4"></path>
<path d="M1210 653 Q1270 780 1300 900" stroke="#FF4A5C" strokeWidth="2.2" className="lf-trail lf-out"></path>
<path d="M1210 653 Q1270 780 1300 900" stroke="#FF6A50" strokeWidth="2" className="lf-trail lf-out lf-t2"></path>
<path d="M1213 653 Q1330 770 1450 900" stroke="#FF4A5C" strokeWidth="2.4" className="lf-trail lf-out lf-t3"></path>
<path d="M1213 653 Q1330 770 1450 900" stroke="#FFB04A" strokeWidth="2" className="lf-trail lf-out lf-t4"></path>
</g>


<rect x="1309" y="668" width="1.5" height="30" fill="#141B4E"></rect>
<circle cx="1310" cy="668" r="14" fill="url(#lf-lamp)"></circle>
<rect x="1424" y="704" width="2" height="52" fill="#141B4E"></rect>
<circle cx="1425" cy="704" r="22" fill="url(#lf-lamp)"></circle>
<rect x="1528" y="740" width="3" height="80" fill="#141B4E"></rect>
<circle cx="1529" cy="740" r="34" fill="url(#lf-lamp)"></circle>
<circle cx="1205" cy="650" r="26" fill="url(#lf-cool)" opacity=".7"></circle>
</svg>
  )
}
