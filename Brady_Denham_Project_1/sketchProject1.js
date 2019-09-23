function setup(){

    //window width = 1280
    //window height = 660
    createCanvas(windowWidth,windowHeight);
    background(150);
}

function draw(){

    fill(97,78,44);

    //Start of chin beard
    beginShape();
    vertex(490,547);
    vertex(507,458);
    vertex(521,458);
    vertex(523,509);
    vertex(509,547);
    endShape(CLOSE);

    triangle(526,503,525,458,542,458);

    beginShape();
    vertex(515,547);
    vertex(547,458);
    vertex(557,458);
    vertex(537,547);
    endShape(CLOSE);

    beginShape();
    vertex(562,458);
    vertex(542,547);
    vertex(564,547);
    vertex(573,506);
    vertex(574,458);
    endShape(CLOSE);

    triangle(577,458,585,458,576,502);

    //Start of larger beard pieces
    beginShape();
    vertex(589,458);
    vertex(639,447);
    vertex(639,502);
    vertex(569,547);
    endShape(CLOSE);

    beginShape();
    vertex(581,547);
    vertex(644,507);
    vertex(703,482);
    vertex(664,539);
    endShape(CLOSE);

    beginShape();
    vertex(648,500);
    vertex(648,444);
    vertex(699,405);
    vertex(699,476);
    endShape(CLOSE);

    //Back of jaw
    triangle(673,539,742,480,739,441);

    beginShape();
    vertex(705,476);
    vertex(739,430);
    vertex(739,367);
    vertex(705,401);
    endShape(CLOSE);

    beginShape();
    vertex(748,477);
    vertex(745,434);
    vertex(745,368);
    vertex(770,374);
    vertex(770,413);
    endShape(CLOSE);    

    beginShape();
    vertex(673,415);
    vertex(699,372);
    vertex(699,315);
    vertex(732,363);
    vertex(702,395);
    endShape(CLOSE);  

    beginShape();
    vertex(775,409);
    vertex(774,370);
    vertex(788,318);
    vertex(797,365);
    endShape(CLOSE);

    triangle(739,362,711,324,744,320);

    beginShape();
    vertex(769,368);
    vertex(745,363);
    vertex(750,311);
    vertex(760,278);
    vertex(775,298);
    vertex(775,342);
    endShape(CLOSE);

     //Beard hair near the ear
    beginShape();
    vertex(729,317);
    vertex(708,319);
    vertex(699,307);
    vertex(699,284);
    vertex(703,274);
    vertex(713,297);
    vertex(725,306);
    endShape(CLOSE);
    
    beginShape();
    vertex(779,331);
    vertex(779,291);
    vertex(761,271);
    vertex(761,263);
    vertex(776,272);
    vertex(788,268);
    vertex(794,283);
    endShape(CLOSE);

    beginShape();
    vertex(799,360);
    vertex(790,314);
    vertex(799,283);
    vertex(811,262);
    vertex(813,290);
    endShape(CLOSE);

    beginShape();
    vertex(797,280);
    vertex(788,249);
    vertex(802,230);
    vertex(810,256);
    endShape(CLOSE);

    triangle(787,245,770,190,800,226);

    //Hair on back of head
    beginShape();
    vertex(799,217);
    vertex(804,224);
    vertex(816,262);
    vertex(816,205);
    vertex(799,181);
    endShape(CLOSE);

    beginShape();
    vertex(816,198);
    vertex(817,169);
    vertex(805,159);
    vertex(785,153);
    vertex(799,168);
    vertex(799,175);
    endShape(CLOSE);

    beginShape();
    vertex(794,212);
    vertex(795,170);
    vertex(781,153);
    vertex(769,164);
    vertex(770,184);
    endShape(CLOSE);

    beginShape();
    vertex(766,190);
    vertex(761,190);
    vertex(746,167);
    vertex(747,156);
    vertex(743,149);
    vertex(757,149);
    vertex(764,157);
    endShape(CLOSE);

    triangle(770,157,761,149,777,152);

    beginShape();
    vertex(782,245);
    vertex(765,239);
    vertex(765,218);
    vertex(748,211);
    vertex(761,194);
    vertex(768,194);
    endShape(CLOSE);

    beginShape();
    vertex(759,238);
    vertex(732,224);
    vertex(719,230);
    vertex(719,203);
    vertex(759,223);
    endShape(CLOSE);

    beginShape();
    vertex(758,192);
    vertex(743,208);
    vertex(698,187);
    vertex(742,170);
    endShape(CLOSE);

    beginShape();
    vertex(741,166);
    vertex(661,197);
    vertex(654,182);
    vertex(685,162);
    vertex(741,161);
    endShape(CLOSE);

    beginShape();
    vertex(714,202);
    vertex(691,190);
    vertex(675,198);
    vertex(683,222);
    vertex(714,229);
    endShape(CLOSE);

    beginShape();
    vertex(706,243);
    vertex(656,247);
    vertex(665,202);
    vertex(670,200);
    vertex(680,226);
    vertex(709,231);
    endShape(CLOSE);

    beginShape();
    vertex(659,208);
    vertex(650,248);
    vertex(614,249);
    vertex(599,241);
    endShape(CLOSE);

    beginShape();
    vertex(657,204);
    vertex(651,189);
    vertex(594,181);
    vertex(574,213);
    vertex(637,213);
    endShape(CLOSE);

    //Hair above glasses arm
    beginShape();
    vertex(744,157);
    vertex(688,157);
    vertex(679,141);
    vertex(712,141);
    vertex(738,150);
    endShape(CLOSE);

    beginShape();
    vertex(683,157);
    vertex(674,141);
    vertex(651,141);
    vertex(596,176);
    vertex(644,183);
    endShape(CLOSE);

    beginShape();
    vertex(634,145);
    vertex(620,135);
    vertex(579,143);
    vertex(538,182);
    vertex(594,171);
    endShape(CLOSE);

    beginShape();
    vertex(628,218);
    vertex(577,219);
    vertex(539,234);
    vertex(590,239);
    endShape(CLOSE);

    //Hair near forehead
    beginShape();
    vertex(588,180);
    vertex(531,190);
    vertex(508,238);
    vertex(562,218);
    endShape(CLOSE);

    beginShape();
    vertex(570,142);
    vertex(545,135);
    vertex(526,139);
    vertex(508,157);
    endShape(CLOSE);

    beginShape();
    vertex(564,148);
    vertex(505,162);
    vertex(502,237);
    vertex(525,184);
    endShape(CLOSE);

    //Moustache
    beginShape();
    vertex(505,385);
    vertex(511,374);
    vertex(532,372);
    vertex(545,384);
    vertex(535,394);
    vertex(508,394);
    endShape(CLOSE);

    beginShape();
    vertex(550,383);
    vertex(538,372);
    vertex(554,372);
    vertex(570,385);
    vertex(574,401);
    vertex(568,413);
    vertex(560,396);
    vertex(542,394);
    endShape(CLOSE);

    beginShape();
    vertex(560,405);
    vertex(568,421);
    vertex(576,406);
    vertex(582,434);
    vertex(595,453);
    vertex(582,453);
    vertex(577,437);
    vertex(564,437);
    vertex(559,453);
    vertex(549,453);
    vertex(558,434);
    endShape(CLOSE);

    beginShape();
    vertex(578,453);
    vertex(564,453);
    vertex(567,441);
    vertex(574,441);
    endShape(CLOSE);

    //Start of glasses frame
    beginShape();
    vertex(501,255);
    vertex(529,247);
    vertex(592,253);
    vertex(599,257);
    vertex(591,298);
    vertex(599,289);
    vertex(606,254);
    vertex(592,246);
    vertex(529,239);
    vertex(501,247);
    fill(35,31,32);
    endShape(CLOSE);

    beginShape();
    vertex(610,256);
    vertex(648,254);
    vertex(705,248);
    vertex(702,261);
    vertex(678,266);
    vertex(654,268);
    vertex(608,267);
    endShape(CLOSE);

    beginShape();
    vertex(763,246);
    vertex(786,252);
    vertex(788,264);
    vertex(776,267);
    vertex(762,258);
    endShape(CLOSE);

    //Glass

    fill(237,236,237);

    beginShape();
    vertex(502,260);
    vertex(530,254);
    vertex(593,260);
    vertex(582,316);
    vertex(507,316);
    endShape(CLOSE);

    //Start of skin from ear
    fill(242,219,186);

    beginShape();
    vertex(758,244);
    vertex(756,275);
    vertex(743,316);
    vertex(734,316);
    vertex(728,303);
    vertex(715,292);
    vertex(707,271);
    vertex(712,240);
    vertex(732,231);
    endShape(CLOSE);

    beginShape();
    vertex(748,248);
    vertex(741,286);
    vertex(732,295);
    vertex(723,285);
    vertex(731,275);
    vertex(729,263);
    vertex(719,260);
    vertex(719,249);
    vertex(733,241);
    endShape(CLOSE);

    beginShape();
    vertex(699,267);
    vertex(694,280);
    vertex(693,310);
    vertex(666,289);
    vertex(657,273);
    vertex(678,271);
    endShape(CLOSE);

    //Back of cheeks
    beginShape();
    vertex(693,316);
    vertex(693,370);
    vertex(677,396);
    vertex(635,346);
    vertex(638,307);
    vertex(663,294);
    endShape(CLOSE);

    beginShape();
    vertex(674,400);
    vertex(631,351);
    vertex(612,348);
    vertex(586,432);
    vertex(600,452);
    vertex(639,443);
    vertex(667,418);
    endShape(CLOSE);

    beginShape();
    vertex(600,376);
    vertex(589,376);
    vertex(575,387);
    vertex(584,427);
    vertex(587,418);
    endShape(CLOSE);

    beginShape();
    vertex(630,345);
    vertex(632,307);
    vertex(603,293);
    vertex(590,308);
    vertex(582,338);
    endShape(CLOSE);

    //Mid face
    beginShape();
    vertex(660,289);
    vertex(650,273);
    vertex(609,271);
    vertex(604,288);
    vertex(635,301);
    endShape(CLOSE);

    beginShape();
    vertex(608,347);
    vertex(598,372);
    vertex(589,371);
    vertex(575,356);
    vertex(583,344);
    endShape(CLOSE);

    beginShape();
    vertex(585,373);
    vertex(573,384);
    vertex(550,365);
    vertex(537,344);
    vertex(540,333);
    vertex(557,321);
    vertex(580,321);
    vertex(578,343);
    vertex(569,355);
    endShape(CLOSE);

    beginShape();
    vertex(551,321);
    vertex(537,329);
    vertex(533,342);
    vertex(533,345);
    vertex(543,359);
    vertex(544,369);
    vertex(531,369);
    vertex(515,370);
    vertex(513,357);
    vertex(521,345);
    vertex(514,321);
    endShape(CLOSE);

    //Nose
    beginShape();
    vertex(515,344);
    vertex(509,321);
    vertex(503,320);
    vertex(485,353);
    vertex(485,366);
    vertex(496,372);
    vertex(511,370);
    vertex(507,356);
    vertex(516,344);
    endShape(CLOSE);

    //Start of mouth
    beginShape();
    vertex(509,396);
    vertex(536,396);
    vertex(541,400);
    vertex(541,410);
    vertex(525,403);
    vertex(510,401);
    endShape(CLOSE);

    beginShape();
    vertex(545,397);
    vertex(545,422);
    vertex(532,441);
    vertex(550,441);
    vertex(554,433);
    vertex(556,399);
    endShape(CLOSE);

    beginShape();
    vertex(549,444);
    vertex(525,444);
    vertex(508,453);
    vertex(542,453);
    endShape(CLOSE);

    beginShape();
    vertex(507,447);
    vertex(527,439);
    vertex(537,425);
    vertex(518,423);
    vertex(506,425);
    endShape(CLOSE);

    beginShape();
    vertex(540,421);
    vertex(540,413);
    vertex(524,407);
    vertex(509,405);
    vertex(504,414);
    vertex(507,421);
    vertex(518,418);
    endShape(CLOSE);
    
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
