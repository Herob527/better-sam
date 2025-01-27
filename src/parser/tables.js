export const StressTable = "*12345678".split("");

export const PhonemeNameTable = (
  " *" + // 00
  ".*" + // 01
  "?*" + // 02
  ",*" + // 03
  "-*" + // 04
  "IY" + // 05
  "IH" + // 06
  "EH" + // 07
  "AE" + // 08
  "AA" + // 09
  "AH" + // 10
  "AO" + // 11
  "UH" + // 12
  "AX" + // 13
  "IX" + // 14
  "ER" + // 15
  "UX" + // 16
  "OH" + // 17
  "RX" + // 18
  "LX" + // 19
  "WX" + // 20
  "YX" + // 21
  "WH" + // 22
  "R*" + // 23
  "L*" + // 24
  "W*" + // 25
  "Y*" + // 26
  "M*" + // 27
  "N*" + // 28
  "NX" + // 29
  "DX" + // 30
  "Q*" + // 31
  "S*" + // 32
  "SH" + // 33
  "F*" + // 34
  "TH" + // 35
  "/H" + // 36
  "/X" + // 37
  "Z*" + // 38
  "ZH" + // 39
  "V*" + // 40
  "DH" + // 41
  "CH" + // 42
  "**" + // 43
  "J*" + // 44
  "**" + // 45
  "**" + // 46
  "**" + // 47
  "EY" + // 48
  "AY" + // 49
  "OY" + // 50
  "AW" + // 51
  "OW" + // 52
  "UW" + // 53
  "B*" + // 54
  "**" + // 55
  "**" + // 56
  "D*" + // 57
  "**" + // 58
  "**" + // 59
  "G*" + // 60
  "**" + // 61
  "**" + // 62
  "GX" + // 63
  "**" + // 64
  "**" + // 65
  "P*" + // 66
  "**" + // 67
  "**" + // 68
  "T*" + // 69
  "**" + // 70
  "**" + // 71
  "K*" + // 72
  "**" + // 73
  "**" + // 74
  "KX" + // 75
  "**" + // 76
  "**" + // 77
  "UL" + // 78
  "UM" + // 79
  "UN"
) // 80
  .match(/.{1,2}/g);

/**
 * Flags for phoneme names.
 *
 * Merged from the original two tables via: oldFlags[i] | (oldFlags2[i] << 8)
 *
 *  0x8000
 *    ' *', '.*', '?*', ',*', '-*'
 *  0x4000
 *    '.*', '?*', ',*', '-*', 'Q*'
 *  0x2000  FLAG_FRICATIVE
 *    'S*', 'SH', 'F*', 'TH', 'Z*', 'ZH', 'V*', 'DH', 'CH', '**', '**'
 *  0x1000  FLAG_LIQUIC
 *    'R*', 'L*', 'W*', 'Y*'
 *  0x0800  FLAG_NASAL
 *    'M*', 'N*', 'NX'
 *  0x0400  FLAG_ALVEOLAR
 *    'N*', 'DX', 'S*', 'TH', 'Z*', 'DH', 'D*', '**', '**', 'T*', '**',
 *    '**'
 *  0x0200
 *    --- not used ---
 *  0x0100  FLAG_PUNCT
 *    '.*', '?*', ',*', '-*'
 *  0x0080  FLAG_VOWEL
 *    'IY', 'IH', 'EH', 'AE', 'AA', 'AH', 'AO', 'UH', 'AX', 'IX', 'ER',
 *    'UX', 'OH', 'RX', 'LX', 'WX', 'YX', 'EY', 'AY', 'OY', 'AW', 'OW',
 *    'UW', 'UL', 'UM', 'UN'
 *  0x0040  FLAG_CONSONANT
 *    'WH', 'R*', 'L*', 'W*', 'Y*', 'M*', 'N*', 'NX', 'DX', 'Q*', 'S*',
 *    'SH', 'F*', 'TH', '/H', '/X', 'Z*', 'ZH', 'V*', 'DH', 'CH', '**',
 *    'J*', '**', 'B*', '**', '**', 'D*', '**', '**', 'G*', '**', '**',
 *    'GX', '**', '**', 'P*', '**', '**', 'T*', '**', '**', 'K*', '**',
 *    '**', 'KX', '**', '**', 'UM', 'UN'
 *  0x0020  FLAG_DIP_YX  but looks like front vowels
 *    'IY', 'IH', 'EH', 'AE', 'AA', 'AH', 'AX', 'IX', 'EY', 'AY', 'OY'
 *  0x0010  FLAG_DIPTHONG
 *    'EY', 'AY', 'OY', 'AW', 'OW', 'UW'
 *  0x0008
 *    'M*', 'N*', 'NX', 'DX', 'Q*', 'CH', 'J*', 'B*', '**', '**', 'D*',
 *    '**', '**', 'G*', '**', '**', 'GX', '**', '**', 'P*', '**', '**',
 *    'T*', '**', '**', 'K*', '**', '**', 'KX', '**', '**'
 *  0x0004  FLAG_VOICED
 *    'IY', 'IH', 'EH', 'AE', 'AA', 'AH', 'AO', 'UH', 'AX', 'IX', 'ER',
 *    'UX', 'OH', 'RX', 'LX', 'WX', 'YX', 'WH', 'R*', 'L*', 'W*', 'Y*',
 *    'M*', 'N*', 'NX', 'Q*', 'Z*', 'ZH', 'V*', 'DH', 'J*', '**', 'EY',
 *    'AY', 'OY', 'AW', 'OW', 'UW', 'B*', '**', '**', 'D*', '**', '**',
 *    'G*', '**', '**', 'GX', '**', '**'
 *  0x0002  FLAG_STOPCONS
 *    'B*', '**', '**', 'D*', '**', '**', 'G*', '**', '**', 'GX', '**',
 *    '**', 'P*', '**', '**', 'T*', '**', '**', 'K*', '**', '**', 'KX',
 *    '**', '**'
 *  0x0001  FLAG_UNVOICED_STOPCONS
 *    'P*', '**', '**', 'T*', '**', '**', 'K*', '**', '**', 'KX', '**',
 *    '**', 'UM', 'UN'
 */
export const phonemeFlags = [
  0 | 0x8000, // ' *' 00
  0 | 0x8000 | 0x4000 | 0x0100, // '.*' 01
  0 | 0x8000 | 0x4000 | 0x0100, // '?*' 02
  0 | 0x8000 | 0x4000 | 0x0100, // ',*' 03
  0 | 0x8000 | 0x4000 | 0x0100, // '-*' 04
  0 | 0x0080 | 0x0020 | 0x0004, // 'IY' 05
  0 | 0x0080 | 0x0020 | 0x0004, // 'IH' 06
  0 | 0x0080 | 0x0020 | 0x0004, // 'EH' 07
  0 | 0x0080 | 0x0020 | 0x0004, // 'AE' 08
  0 | 0x0080 | 0x0020 | 0x0004, // 'AA' 09
  0 | 0x0080 | 0x0020 | 0x0004, // 'AH' 10
  0 | 0x0080 | 0x0004, // 'AO' 11
  0 | 0x0080 | 0x0004, // 'UH' 12
  0 | 0x0080 | 0x0020 | 0x0004, // 'AX' 13
  0 | 0x0080 | 0x0020 | 0x0004, // 'IX' 14
  0 | 0x0080 | 0x0004, // 'ER' 15
  0 | 0x0080 | 0x0004, // 'UX' 16
  0 | 0x0080 | 0x0004, // 'OH' 17
  0 | 0x0080 | 0x0004, // 'RX' 18
  0 | 0x0080 | 0x0004, // 'LX' 19
  0 | 0x0080 | 0x0004, // 'WX' 20
  0 | 0x0080 | 0x0004, // 'YX' 21
  0 | 0x0040 | 0x0004, // 'WH' 22
  0 | 0x1000 | 0x0040 | 0x0004, // 'R*' 23
  0 | 0x1000 | 0x0040 | 0x0004, // 'L*' 24
  0 | 0x1000 | 0x0040 | 0x0004, // 'W*' 25
  0 | 0x1000 | 0x0040 | 0x0004, // 'Y*' 26
  0 | 0x0800 | 0x0040 | 0x0008 | 0x0004, // 'M*' 27
  0 | 0x0800 | 0x0400 | 0x0040 | 0x0008 | 0x0004, // 'N*' 28
  0 | 0x0800 | 0x0040 | 0x0008 | 0x0004, // 'NX' 29
  0 | 0x0400 | 0x0040 | 0x0008, // 'DX' 30
  0 | 0x4000 | 0x0040 | 0x0008 | 0x0004, // 'Q*' 31
  0 | 0x2000 | 0x0400 | 0x0040, // 'S*' 32
  0 | 0x2000 | 0x0040, // 'SH' 33
  0 | 0x2000 | 0x0040, // 'F*' 34
  0 | 0x2000 | 0x0400 | 0x0040, // 'TH' 35
  0 | 0x0040, // '/H' 36
  0 | 0x0040, // '/X' 37
  0 | 0x2000 | 0x0400 | 0x0040 | 0x0004, // 'Z*' 38
  0 | 0x2000 | 0x0040 | 0x0004, // 'ZH' 39
  0 | 0x2000 | 0x0040 | 0x0004, // 'V*' 40
  0 | 0x2000 | 0x0400 | 0x0040 | 0x0004, // 'DH' 41
  0 | 0x2000 | 0x0040 | 0x0008, // 'CH' 42
  0 | 0x2000 | 0x0040, // '**' 43
  0 | 0x0040 | 0x0008 | 0x0004, // 'J*' 44
  0 | 0x2000 | 0x0040 | 0x0004, // '**' 45
  0, // '**' 46
  0, // '**' 47
  0 | 0x0080 | 0x0020 | 0x0010 | 0x0004, // 'EY' 48
  0 | 0x0080 | 0x0020 | 0x0010 | 0x0004, // 'AY' 49
  0 | 0x0080 | 0x0020 | 0x0010 | 0x0004, // 'OY' 50
  0 | 0x0080 | 0x0010 | 0x0004, // 'AW' 51
  0 | 0x0080 | 0x0010 | 0x0004, // 'OW' 52
  0 | 0x0080 | 0x0010 | 0x0004, // 'UW' 53
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // 'B*' 54
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 55
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 56
  0 | 0x0400 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // 'D*' 57
  0 | 0x0400 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 58
  0 | 0x0400 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 59
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // 'G*' 60
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 61
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 62
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // 'GX' 63
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 64
  0 | 0x0040 | 0x0008 | 0x0004 | 0x0002, // '**' 65
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // 'P*' 66
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 67
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 68
  0 | 0x0400 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // 'T*' 69
  0 | 0x0400 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 70
  0 | 0x0400 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 71
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // 'K*' 72
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 73
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 74
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // 'KX' 75
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 76
  0 | 0x0040 | 0x0008 | 0x0002 | 0x0001, // '**' 77
  0 | 0x0080, // 'UL' 78
  0 | 0x0080 | 0x0040 | 0x0001, // 'UM' 79
  0 | 0x0080 | 0x0040 | 0x0001, // 'UN' 80
];

/**
 * Combined table of phoneme length.
 *
 * Merged from the original two tables via: phonemeLengthTable[i] | (phonemeStressedLengthTable[i] << 8)
 *
 * Use via:
 *  phonemeLengthTable[i] = combinedPhonemeLengthTable[i] & 0xFF
 *  phonemeStressedLengthTable[i] = combinedPhonemeLengthTable[i] >> 8
 */
export const combinedPhonemeLengthTable = [
  0x0000 | 0x0000, // ' *' 00
  0x0012 | 0x1200, // '.*' 01
  0x0012 | 0x1200, // '?*' 02
  0x0012 | 0x1200, // ',*' 03
  0x0008 | 0x0800, // '-*' 04
  0x0008 | 0x0b00, // 'IY' 05
  0x0008 | 0x0900, // 'IH' 06
  0x0008 | 0x0b00, // 'EH' 07
  0x0008 | 0x0e00, // 'AE' 08
  0x000b | 0x0f00, // 'AA' 09
  0x0006 | 0x0b00, // 'AH' 10
  0x000c | 0x1000, // 'AO' 11
  0x000a | 0x0c00, // 'UH' 12
  0x0005 | 0x0600, // 'AX' 13
  0x0005 | 0x0600, // 'IX' 14
  0x000b | 0x0e00, // 'ER' 15
  0x000a | 0x0c00, // 'UX' 16
  0x000a | 0x0e00, // 'OH' 17
  0x000a | 0x0c00, // 'RX' 18
  0x0009 | 0x0b00, // 'LX' 19
  0x0008 | 0x0800, // 'WX' 20
  0x0007 | 0x0800, // 'YX' 21
  0x0009 | 0x0b00, // 'WH' 22
  0x0007 | 0x0a00, // 'R*' 23
  0x0006 | 0x0900, // 'L*' 24
  0x0008 | 0x0800, // 'W*' 25
  0x0006 | 0x0800, // 'Y*' 26
  0x0007 | 0x0800, // 'M*' 27
  0x0007 | 0x0800, // 'N*' 28
  0x0007 | 0x0800, // 'NX' 29
  0x0002 | 0x0300, // 'DX' 30
  0x0005 | 0x0500, // 'Q*' 31
  0x0002 | 0x0200, // 'S*' 32
  0x0002 | 0x0200, // 'SH' 33
  0x0002 | 0x0200, // 'F*' 34
  0x0002 | 0x0200, // 'TH' 35
  0x0002 | 0x0200, // '/H' 36
  0x0002 | 0x0200, // '/X' 37
  0x0006 | 0x0600, // 'Z*' 38
  0x0006 | 0x0600, // 'ZH' 39
  0x0007 | 0x0800, // 'V*' 40
  0x0006 | 0x0600, // 'DH' 41
  0x0006 | 0x0600, // 'CH' 42
  0x0002 | 0x0200, // '**' 43
  0x0008 | 0x0900, // 'J*' 44
  0x0003 | 0x0400, // '**' 45
  0x0001 | 0x0200, // '**' 46
  0x001e | 0x0100, // '**' 47
  0x000d | 0x0e00, // 'EY' 48
  0x000c | 0x0f00, // 'AY' 49
  0x000c | 0x0f00, // 'OY' 50
  0x000c | 0x0f00, // 'AW' 51
  0x000e | 0x0e00, // 'OW' 52
  0x0009 | 0x0e00, // 'UW' 53
  0x0006 | 0x0800, // 'B*' 54
  0x0001 | 0x0200, // '**' 55
  0x0002 | 0x0200, // '**' 56
  0x0005 | 0x0700, // 'D*' 57
  0x0001 | 0x0200, // '**' 58
  0x0001 | 0x0100, // '**' 59
  0x0006 | 0x0700, // 'G*' 60
  0x0001 | 0x0200, // '**' 61
  0x0002 | 0x0200, // '**' 62
  0x0006 | 0x0700, // 'GX' 63
  0x0001 | 0x0200, // '**' 64
  0x0002 | 0x0200, // '**' 65
  0x0008 | 0x0800, // 'P*' 66
  0x0002 | 0x0200, // '**' 67
  0x0002 | 0x0200, // '**' 68
  0x0004 | 0x0600, // 'T*' 69
  0x0002 | 0x0200, // '**' 70
  0x0002 | 0x0200, // '**' 71
  0x0006 | 0x0700, // 'K*' 72
  0x0001 | 0x0200, // '**' 73
  0x0004 | 0x0400, // '**' 74
  0x0006 | 0x0700, // 'KX' 75
  0x0001 | 0x0100, // '**' 76
  0x0004 | 0x0400, // '**' 77
  0x00c7 | 0x0500, // 'UL' 78
  0x00ff | 0x0500, // 'UM' 79
];

/*

Ind  | phoneme |  flags   |
-----|---------|----------|
0    |   *     | 00000000 |
1    |  .*     | 00000000 |
2    |  ?*     | 00000000 |
3    |  ,*     | 00000000 |
4    |  -*     | 00000000 |

VOWELS
5    |  IY     | 10100100 |
6    |  IH     | 10100100 |
7    |  EH     | 10100100 |
8    |  AE     | 10100100 |
9    |  AA     | 10100100 |
10   |  AH     | 10100100 |
11   |  AO     | 10000100 |
17   |  OH     | 10000100 |
12   |  UH     | 10000100 |
16   |  UX     | 10000100 |
15   |  ER     | 10000100 |
13   |  AX     | 10100100 |
14   |  IX     | 10100100 |

DIPHTONGS
48   |  EY     | 10110100 |
49   |  AY     | 10110100 |
50   |  OY     | 10110100 |
51   |  AW     | 10010100 |
52   |  OW     | 10010100 |
53   |  UW     | 10010100 |


21   |  YX     | 10000100 |
20   |  WX     | 10000100 |
18   |  RX     | 10000100 |
19   |  LX     | 10000100 |
37   |  /X     | 01000000 |
30   |  DX     | 01001000 |


22   |  WH     | 01000100 |


VOICED CONSONANTS
23   |  R*     | 01000100 |
24   |  L*     | 01000100 |
25   |  W*     | 01000100 |
26   |  Y*     | 01000100 |
27   |  M*     | 01001100 |
28   |  N*     | 01001100 |
29   |  NX     | 01001100 |
54   |  B*     | 01001110 |
57   |  D*     | 01001110 |
60   |  G*     | 01001110 |
44   |  J*     | 01001100 |
38   |  Z*     | 01000100 |
39   |  ZH     | 01000100 |
40   |  V*     | 01000100 |
41   |  DH     | 01000100 |

unvoiced CONSONANTS
32   |  S*     | 01000000 |
33   |  SH     | 01000000 |
34   |  F*     | 01000000 |
35   |  TH     | 01000000 |
66   |  P*     | 01001011 |
69   |  T*     | 01001011 |
72   |  K*     | 01001011 |
42   |  CH     | 01001000 |
36   |  /H     | 01000000 |

43   |  **     | 01000000 |
45   |  **     | 01000100 |
46   |  **     | 00000000 |
47   |  **     | 00000000 |


55   |  **     | 01001110 |
56   |  **     | 01001110 |
58   |  **     | 01001110 |
59   |  **     | 01001110 |
61   |  **     | 01001110 |
62   |  **     | 01001110 |
63   |  GX     | 01001110 |
64   |  **     | 01001110 |
65   |  **     | 01001110 |
67   |  **     | 01001011 |
68   |  **     | 01001011 |
70   |  **     | 01001011 |
71   |  **     | 01001011 |
73   |  **     | 01001011 |
74   |  **     | 01001011 |
75   |  KX     | 01001011 |
76   |  **     | 01001011 |
77   |  **     | 01001011 |


SPECIAL
78   |  UL     | 10000000 |
79   |  UM     | 11000001 |
80   |  UN     | 11000001 |
31   |  Q*     | 01001100 |

*/
