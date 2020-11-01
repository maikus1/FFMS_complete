function dataa(results){
    var data = results;
    if(data[0] === undefined){
        data = 0
    }else{
        for(var index in data){
            data[index].ans = output(data[index]);
        }
    }
     exports.data = data;
}


function activate (x){
    return x
    return 1/(1+Math.exp(-x)); // sigmoid finction
}

function output(data){
    if(data.confidence == 'nominal'){
        return node_31(data);
    }else if(data.confidence == 'high'){
        return node_7(data);
    }else if(data.confidence == 'low'){
        return node_47(data);
    }else if(data.confidence == '82'){
        return node_3(data);
    }else if(data.confidence == '89'){
        return node_4(data);
    }else if(data.confidence == '72'){
        return node_5(data);
    }else if(data.confidence == '61'){
        return node_6(data);
    }else if(data.confidence == '80'){
        return node_7(data);
    }else if(data.confidence == '100'){
        return node_8(data);
    }else if(data.confidence == '90'){
        return node_9(data);
    }else if(data.confidence == '49'){
        return node_10(data);
    }else if(data.confidence == '86'){
        return node_11(data);
    }else if(data.confidence == '75'){
        return node_12(data);
    }else if(data.confidence == '91'){
        return node_13(data);
    }else if(data.confidence == '36'){
        return node_14(data);
    }else if(data.confidence == '77'){
        return node_15(data);
    }else if(data.confidence == '35'){
        return node_16(data);
    }else if(data.confidence == '55'){
        return node_17(data);
    }else if(data.confidence == '87'){
        return node_18(data);
    }else if(data.confidence == '62'){
        return node_19(data);
    }else if(data.confidence == '74'){
        return node_20(data);
    }else if(data.confidence == '93'){
        return node_21(data);
    }else if(data.confidence == '76'){
        return node_22(data);
    }else if(data.confidence == '95'){
        return node_23(data);
    }else if(data.confidence == '78'){
        return node_24(data);
    }else if(data.confidence == '79'){
        return node_25(data);
    }else if(data.confidence == '58'){
        return node_26(data);
    }else if(data.confidence == '54'){
        return node_27(data);
    }else if(data.confidence == '71'){
        return node_28(data);
    }else if(data.confidence == '40'){
        return node_29(data);
    }else if(data.confidence == '83'){
        return node_30(data);
    }else if(data.confidence == '50'){
        return node_31(data);
    }else if(data.confidence == '53'){
        return node_32(data);
    }else if(data.confidence == '68'){
        return node_33(data);
    }else if(data.confidence == '46'){
        return node_34(data);
    }else if(data.confidence == '64'){
        return node_35(data);
    }else if(data.confidence == '60'){
        return node_36(data);
    }else if(data.confidence == '85'){
        return node_37(data);
    }else if(data.confidence == '73'){
        return node_38(data);
    }else if(data.confidence == '70'){
        return node_39(data);
    }else if(data.confidence == '37'){
        return node_40(data);
    }else if(data.confidence == '65'){
        return node_41(data);
    }else if(data.confidence == '88'){
        return node_42(data);
    }else if(data.confidence == '51'){
        return node_43(data);
    }else if(data.confidence == '84'){
        return node_44(data);
    }else if(data.confidence == '92'){
        return node_45(data);
    }else if(data.confidence == '56'){
        return node_46(data);
    }else if(data.confidence == '20'){
        return node_47(data);
    }else if(data.confidence == '66'){
        return node_48(data);
    }else if(data.confidence == '57'){
        return node_49(data);
    }else if(data.confidence == '2.7'){
        return node_50(data);
    }else{
        return 1;
    }
}

function node_0(data){
    var node = [];
    var Threshold =   -2.161068069432103
    // Node 51    -0.5750111887763799
    // Node 52    -0.7320585179059795
    // Node 53    -0.5966881139695829
    // Node 54    -0.4491226415145864
    // Node 55    -0.6890179437879848
    // Node 56    -0.7028287099393576
    // Node 57    -1.0158719839449537
    // Node 58    -0.7666700913587736
    // Node 59    -0.4928367062248696
    // Node 60    -1.3557333984304591
    // Node 61    -0.6800233495549804
    // Node 62    -0.6289163748472509
    // Node 63    -0.6158956060212079
    // Node 64    -0.4570533522500205
    // Node 65    -0.8566459990857845
    // Node 66    -1.3178214337151137
    // Node 67    -0.7973178944713589
    // Node 68    -0.546873719768261
    // Node 69    -0.5700691306063045
    // Node 70    -0.6080256672052808
    // Node 71    -0.7574846152588292
    // Node 72    -0.7595868233084434
    // Node 73    -0.6705331165291626
    // Node 74    -0.5191726195281142
    // Node 75    -0.7098365938358043
    // Node 76    -0.9250084555712665
    // Node 77    -0.8528280418305455
    // Node 78    -0.5052117436512347
    // Node 79    -0.8662164513505012
    node[51] = node_51(data)*(-0.5750111887763799);
    node[52] = node_52(data)*(-0.7320585179059795);
    node[53] = node_53(data)*(-0.5966881139695829);
    node[54] = node_54(data)*(-0.4491226415145864);
    node[55] = node_55(data)*(-0.6890179437879848);
    node[56] = node_56(data)*(-0.7028287099393576);
    node[57] = node_57(data)*(-1.0158719839449537);
    node[58] = node_58(data)*(-0.7666700913587736);
    node[59] = node_59(data)*(-0.4928367062248696);
    node[60] = node_60(data)*(-1.3557333984304591);
    node[61] = node_61(data)*(-0.6800233495549804);
    node[62] = node_62(data)*(-0.6289163748472509);
    node[63] = node_63(data)*(-0.6158956060212079);
    node[64] = node_64(data)*(-0.4570533522500205);
    node[65] = node_65(data)*(-0.8566459990857845);
    node[66] = node_66(data)*(-1.3178214337151137);
    node[67] = node_67(data)*(-0.7973178944713589);
    node[68] = node_68(data)*(-0.546873719768261);
    node[69] = node_69(data)*(-0.5700691306063045);
    node[70] = node_70(data)*(-0.6080256672052808);
    node[71] = node_71(data)*(-0.7574846152588292);
    node[72] = node_72(data)*(-0.7595868233084434);
    node[73] = node_73(data)*(-0.6705331165291626);
    node[74] = node_74(data)*(-0.5191726195281142);
    node[75] = node_75(data)*(-0.7098365938358043);
    node[76] = node_76(data)*(-0.9250084555712665);
    node[77] = node_77(data)*(-0.8528280418305455);
    node[78] = node_78(data)*(-0.5052117436512347);
    node[79] = node_79(data)*(-0.8662164513505012);

    var sum,sum1,sum2;
        
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_1(data){
    var Threshold  =  -2.1921528686064935
    // Node 51    -0.5622729063698528
    // Node 52    -0.797767385386542
    // Node 53    -0.5804989834772231
    // Node 54    -0.5097980417322912
    // Node 55    -0.6678292336657653
    // Node 56    -0.6805815780092143
    // Node 57    -1.0290721646631213
    // Node 58    -0.7435976498616842
    // Node 59    -0.46730053471014554
    // Node 60    -1.335793156227062
    // Node 61    -0.7002163112615214
    // Node 62    -0.6159220273518872
    // Node 63    -0.5924656071216474
    // Node 64    -0.39778035006467
    // Node 65    -0.8291326418821812
    // Node 66    -1.343175266668981
    // Node 67    -0.8307834926539182
    // Node 68    -0.6198838491336748
    // Node 69    -0.5692946037380491
    // Node 70    -0.6269478213985973
    // Node 71    -0.7550581881991894
    // Node 72    -0.701457841946045
    // Node 73    -0.6508647067056977
    // Node 74    -0.5418507158427933
    // Node 75    -0.6982578682968559
    // Node 76    -0.9022600013067514
    // Node 77    -0.8162183742341126
    // Node 78    -0.5233437027016749
    // Node 79    -0.8755174018255434
    var node = [];
    node[51] = node_51(data)*(-0.5622729063698528);
    node[52] = node_52(data)*(-0.797767385386542);
    node[53] = node_53(data)*(-0.5804989834772231);
    node[54] = node_54(data)*(-0.5097980417322912);
    node[55] = node_55(data)*(-0.6678292336657653);
    node[56] = node_56(data)*(-0.6805815780092143);
    node[57] = node_57(data)*(-1.0290721646631213);
    node[58] = node_58(data)*(-0.7435976498616842);
    node[59] = node_59(data)*(-0.46730053471014554);
    node[60] = node_60(data)*(-1.335793156227062);
    node[61] = node_61(data)*(-0.7002163112615214);
    node[62] = node_62(data)*(-0.6159220273518872);
    node[63] = node_63(data)*(-0.5924656071216474);
    node[64] = node_64(data)*(-0.39778035006467);
    node[65] = node_65(data)*(-0.8291326418821812);
    node[66] = node_66(data)*(-1.343175266668981);
    node[67] = node_67(data)*(-0.8307834926539182);
    node[68] = node_68(data)*(-0.6198838491336748);
    node[69] = node_69(data)*(-0.5692946037380491);
    node[70] = node_70(data)*(-0.6269478213985973);
    node[71] = node_71(data)*(-0.7550581881991894);
    node[72] = node_72(data)*(-0.701457841946045);
    node[73] = node_73(data)*(-0.6508647067056977);
    node[74] = node_74(data)*(-0.5418507158427933);
    node[75] = node_75(data)*(-0.6982578682968559);
    node[76] = node_76(data)*(-0.9022600013067514);
    node[77] = node_77(data)*(-0.8162183742341126);
    node[78] = node_78(data)*(-0.5233437027016749);
    node[79] = node_79(data)*(-0.8755174018255434);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_2(data){
    var Threshold  =  -2.1560732964833167
    // Node 51    -0.558953031397723
    // Node 52    -0.8071808223780823
    // Node 53    -0.5679619998605387
    // Node 54    -0.5354695236989523
    // Node 55    -0.6858333445078925
    // Node 56    -0.6311683984447567
    // Node 57    -1.0481559095532267
    // Node 58    -0.7437515280439305
    // Node 59    -0.4840581196528225
    // Node 60    -1.382552351325483
    // Node 61    -0.727396437869261
    // Node 62    -0.6635089834443355
    // Node 63    -0.6578142345692191
    // Node 64    -0.45450957190447
    // Node 65    -0.863384095401624
    // Node 66    -1.273477172354158
    // Node 67    -0.8007340305960245
    // Node 68    -0.5546190581720364
    // Node 69    -0.5742375490318906
    // Node 70    -0.6319122279049059
    // Node 71    -0.7739147418379907
    // Node 72    -0.7318157152022655
    // Node 73    -0.6388400587592401
    // Node 74    -0.5866996089288795
    // Node 75    -0.7081925396003108
    // Node 76    -0.947578758122818
    // Node 77    -0.8461248436100571
    // Node 78    -0.5047883783104756
    // Node 79    -0.8284026309831783
    var node = [];
    node[51] = node_51(data)*(-0.558953031397723);
    node[52] = node_52(data)*(-0.8071808223780823);
    node[53] = node_53(data)*(-0.5679619998605387);
    node[54] = node_54(data)*(-0.5354695236989523);
    node[55] = node_55(data)*(-0.6858333445078925);
    node[56] = node_56(data)*(-0.6311683984447567);
    node[57] = node_57(data)*(-1.0481559095532267);
    node[58] = node_58(data)*(-0.7437515280439305);
    node[59] = node_59(data)*(-0.4840581196528225);
    node[60] = node_60(data)*(-1.382552351325483);
    node[61] = node_61(data)*(-0.727396437869261);
    node[62] = node_62(data)*(-0.6635089834443355);
    node[63] = node_63(data)*(-0.6578142345692191);
    node[64] = node_64(data)*(-0.45450957190447);
    node[65] = node_65(data)*(-0.863384095401624);
    node[66] = node_66(data)*(-1.273477172354158);
    node[67] = node_67(data)*(-0.8007340305960245);
    node[68] = node_68(data)*(-0.5546190581720364);
    node[69] = node_69(data)*(-0.5742375490318906);
    node[70] = node_70(data)*(-0.6319122279049059);
    node[71] = node_71(data)*(-0.7739147418379907);
    node[72] = node_72(data)*(-0.7318157152022655);
    node[73] = node_73(data)*(-0.6388400587592401);
    node[74] = node_74(data)*(-0.5866996089288795);
    node[75] = node_75(data)*(-0.7081925396003108);
    node[76] = node_76(data)*(-0.947578758122818);
    node[77] = node_77(data)*(-0.8461248436100571);
    node[78] = node_78(data)*(-0.5047883783104756);
    node[79] = node_79(data)*(-0.8284026309831783);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_3(data){
    var Threshold  =  -7.562906108685194
    // Node 51    -5.797329503749283
    // Node 52    9.38724413085143
    // Node 53    -3.554782088361599
    // Node 54    -0.5881252541174516
    // Node 55    -4.800626655528485
    // Node 56    -1.6088920912109168
    // Node 57    -1.6090987206622196
    // Node 58    -3.955873235310642
    // Node 59    -0.6003089700658274
    // Node 60    -3.9785919142044937
    // Node 61    9.350773545660386
    // Node 62    -2.131032011056868
    // Node 63    -1.7285486279719475
    // Node 64    -0.39414667726995506
    // Node 65    -5.142062823569631
    // Node 66    -0.6903835096099097
    // Node 67    -4.6099822088069065
    // Node 68    -1.4995540506322556
    // Node 69    -0.6722241184944522
    // Node 70    -2.7048928404604857
    // Node 71    -4.170900353532343
    // Node 72    -2.2851294169751086
    // Node 73    3.741793286555777
    // Node 74    -0.7503994505398377
    // Node 75    -4.322353598788587
    // Node 76    1.7101988933139018
    // Node 77    2.163175868059332
    // Node 78    -1.75226448628669
    // Node 79    -5.355554006421916
    var node = [];
    node[51] = node_51(data)*(-5.797329503749283);
    node[52] = node_52(data)*(9.38724413085143);
    node[53] = node_53(data)*(-3.554782088361599);
    node[54] = node_54(data)*(-0.5881252541174516);
    node[55] = node_55(data)*(-0.5881252541174516);
    node[56] = node_56(data)*(-4.800626655528485);
    node[57] = node_57(data)*(-1.6088920912109168);
    node[58] = node_58(data)*(-3.955873235310642);
    node[59] = node_59(data)*(-0.6003089700658274);
    node[60] = node_60(data)*(-3.9785919142044937);
    node[61] = node_61(data)*(9.350773545660386);
    node[62] = node_62(data)*(-2.131032011056868);
    node[63] = node_63(data)*(-1.7285486279719475);
    node[64] = node_64(data)*(-0.39414667726995506);
    node[65] = node_65(data)*(-5.142062823569631);
    node[66] = node_66(data)*(-0.6903835096099097);
    node[67] = node_67(data)*(-4.6099822088069065);
    node[68] = node_68(data)*(-1.4995540506322556);
    node[69] = node_69(data)*(-0.6722241184944522);
    node[70] = node_70(data)*(-2.7048928404604857);
    node[71] = node_71(data)*(-4.170900353532343);
    node[72] = node_72(data)*(-2.2851294169751086);
    node[73] = node_73(data)*(3.741793286555777);
    node[74] = node_74(data)*(-0.7503994505398377);
    node[75] = node_75(data)*(-4.322353598788587);
    node[76] = node_76(data)*(1.7101988933139018);
    node[77] = node_77(data)*(2.163175868059332);
    node[78] = node_78(data)*(-1.75226448628669);
    node[79] = node_79(data)*(-5.355554006421916);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_4(data){
   var Threshold  =  -3.1741500301184358
    // Node 51    -9.294569835715569
    // Node 52    0.4475942633721893
    // Node 53    -0.8625867259854457
    // Node 54    -3.843084662055686
    // Node 55    3.229336704124598
    // Node 56    -2.885665020483054
    // Node 57    0.9290581133843008
    // Node 58    -6.44791482163258
    // Node 59    -0.36099310548247
    // Node 60    -9.067632133342686
    // Node 61    10.167749257555105
    // Node 62    -0.7662840966322569
    // Node 63    -1.306164965493282
    // Node 64    -1.4859482354670215
    // Node 65    -3.263143631040385
    // Node 66    -3.912761350642017
    // Node 67    -2.2614718445000146
    // Node 68    -3.5107866393990186
    // Node 69    -0.631052209208825
    // Node 70    -9.266864900514854
    // Node 71    -3.3443822298804955
    // Node 72    -5.614068429948258
    // Node 73    -2.4298235407503204
    // Node 74    -0.5708885407808604
    // Node 75    -2.8037004116924598
    // Node 76    -1.4415493430883215
    // Node 77    5.289674735725108
    // Node 78    -0.6911468638124595
    // Node 79    0.9588267496259042
    var node = [];
    node[51] = node_51(data)*(-9.294569835715569);
    node[52] = node_52(data)*(0.4475942633721893);
    node[53] = node_53(data)*(-0.8625867259854457);
    node[54] = node_54(data)*(-3.843084662055686);
    node[55] = node_55(data)*(3.229336704124598);
    node[56] = node_56(data)*(-2.885665020483054);
    node[57] = node_57(data)*(0.9290581133843008);
    node[58] = node_58(data)*(-6.44791482163258);
    node[59] = node_59(data)*(-0.36099310548247);
    node[60] = node_60(data)*(-9.067632133342686);
    node[61] = node_61(data)*(10.167749257555105);
    node[62] = node_62(data)*(-0.7662840966322569);
    node[63] = node_63(data)*(-1.306164965493282);
    node[64] = node_64(data)*(-1.4859482354670215);
    node[65] = node_65(data)*(-3.263143631040385);
    node[66] = node_66(data)*(-3.912761350642017);
    node[67] = node_67(data)*(-2.2614718445000146);
    node[68] = node_68(data)*(-3.5107866393990186);
    node[69] = node_69(data)*(-0.631052209208825);
    node[70] = node_70(data)*(-9.266864900514854);
    node[71] = node_71(data)*(-3.3443822298804955);
    node[72] = node_72(data)*(-5.614068429948258);
    node[73] = node_73(data)*(-2.4298235407503204);
    node[74] = node_74(data)*(-0.5708885407808604);
    node[75] = node_75(data)*(-2.8037004116924598);
    node[76] = node_76(data)*(-1.4415493430883215);
    node[77] = node_77(data)*(5.289674735725108);
    node[78] = node_78(data)*(-0.6911468638124595);
    node[79] = node_79(data)*(0.9588267496259042);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_5(data){
    var Threshold  =  -2.158335894348658
    // Node 51      2.264561447594795
    // Node 52    -4.784724314182736
    // Node 53    -8.21132192197925
    // Node 54    -0.5421860935918579
    // Node 55    -4.399478047967099
    // Node 56    -5.044623137310675
    // Node 57    -6.721376385331387
    // Node 58    -4.086234428136767
    // Node 59    -0.6439793992168018
    // Node 60    -13.76190392971438
    // Node 61    2.2445292886078043
    // Node 62    -4.445227858255443
    // Node 63    7.336033364330241
    // Node 64    -0.4986994108721274
    // Node 65    -7.118709346135614
    // Node 66    2.979946019462225
    // Node 67    0.48596988113190215
    // Node 68    -13.99448773022231
    // Node 69    3.704741284436
    // Node 70    12.111245384329356
    // Node 71    -12.72552755984002
    // Node 72    -4.0735987554729975
    // Node 73    15.255980385248524
    // Node 74    9.033919941341772
    // Node 75    -1.186687862678464
    // Node 76    8.593097457316942
    // Node 77    -13.951945751931564
    // Node 78    -0.6065199764039335
    // Node 79    -4.344658819109683
    var node = [];
    node[51] = node_51(data)*( 2.264561447594795);
    node[52] = node_52(data)*(-4.784724314182736);
    node[53] = node_53(data)*(-8.21132192197925);
    node[54] = node_54(data)*(-0.5421860935918579);
    node[55] = node_55(data)*(-4.399478047967099);
    node[56] = node_56(data)*(-5.044623137310675);
    node[57] = node_57(data)*(-6.721376385331387);
    node[58] = node_58(data)*(-4.086234428136767);
    node[59] = node_59(data)*(-0.6439793992168018);
    node[60] = node_60(data)*(-13.76190392971438);
    node[61] = node_61(data)*(2.2445292886078043);
    node[62] = node_62(data)*(-4.445227858255443);
    node[63] = node_63(data)*(7.336033364330241);
    node[64] = node_64(data)*(-0.4986994108721274);
    node[65] = node_65(data)*(-7.118709346135614);
    node[66] = node_66(data)*(2.979946019462225);
    node[67] = node_67(data)*(0.48596988113190215);
    node[68] = node_68(data)*(-13.99448773022231);
    node[69] = node_69(data)*(3.704741284436);
    node[70] = node_70(data)*(12.111245384329356);
    node[71] = node_71(data)*(-12.72552755984002);
    node[72] = node_72(data)*(-4.0735987554729975);
    node[73] = node_73(data)*(15.255980385248524);
    node[74] = node_74(data)*(9.033919941341772);
    node[75] = node_75(data)*(-1.186687862678464);
    node[76] = node_76(data)*(8.593097457316942);
    node[77] = node_77(data)*(-13.951945751931564);
    node[78] = node_78(data)*(-0.6065199764039335);
    node[79] = node_79(data)*(-4.344658819109683);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_6(data){
    var Threshold  =  -9.674005771664191
    // Node 51    -1.127223421675885
    // Node 52    -4.71281811339098
    // Node 53    -4.470484709721641
    // Node 54    -0.5425689532911365
    // Node 55    -1.8544951386582553
    // Node 56    -3.178310601964528
    // Node 57    -6.373492543961174
    // Node 58    -2.7721350302773033
    // Node 59    -2.206127673340754
    // Node 60    -0.020986145068538985
    // Node 61    -4.027210016274581
    // Node 62    -4.946075859806586
    // Node 63    -5.832858632567608
    // Node 64    -0.45344445903681485
    // Node 65    -8.594220301402462
    // Node 66    -6.512112466992092
    // Node 67    1.8597344615126705
    // Node 68    -0.7337334062914569
    // Node 69    -1.7183723341088184
    // Node 70    -1.7233048296168934
    // Node 71    9.063466817540975
    // Node 72    -4.784565395298849
    // Node 73    7.278812660337269
    // Node 74    -2.5324912260745287
    // Node 75    -2.1897466909339145
    // Node 76    3.9164253743973134
    // Node 77    4.483190599025458
    // Node 78    -1.2431954092554063
    // Node 79    -1.836136002117273
    var node = [];
    node[51] = node_51(data)*(-1.127223421675885);
    node[52] = node_52(data)*(-4.71281811339098);
    node[53] = node_53(data)*(-4.470484709721641);
    node[54] = node_54(data)*(-0.5425689532911365);
    node[55] = node_55(data)*(-1.8544951386582553);
    node[56] = node_56(data)*(-3.178310601964528);
    node[57] = node_57(data)*(-6.373492543961174);
    node[58] = node_58(data)*(-2.7721350302773033);
    node[59] = node_59(data)*(-2.206127673340754);
    node[60] = node_60(data)*(-0.020986145068538985);
    node[61] = node_61(data)*(-4.027210016274581);
    node[62] = node_62(data)*(-4.946075859806586);
    node[63] = node_63(data)*(-5.832858632567608);
    node[64] = node_64(data)*(-0.45344445903681485);
    node[65] = node_65(data)*(-8.594220301402462);
    node[66] = node_66(data)*(-6.512112466992092);
    node[67] = node_67(data)*(1.8597344615126705);
    node[68] = node_68(data)*(-0.7337334062914569);
    node[69] = node_69(data)*(-1.7183723341088184);
    node[70] = node_70(data)*(-1.7233048296168934);
    node[71] = node_71(data)*(9.063466817540975);
    node[72] = node_72(data)*(-4.784565395298849);
    node[73] = node_73(data)*(7.278812660337269);
    node[74] = node_74(data)*(-2.5324912260745287);
    node[75] = node_75(data)*(-2.1897466909339145);
    node[76] = node_76(data)*(3.9164253743973134);
    node[77] = node_77(data)*(4.483190599025458);
    node[78] = node_78(data)*(-1.2431954092554063);
    node[79] = node_79(data)*(-1.836136002117273);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_7(data){
    var Threshold =   -4.275728797509687
    // Node 51    -4.599040924359293
    // Node 52    0.22358463263198392
    // Node 53    1.9273684743989747
    // Node 54    8.655962738510231
    // Node 55    1.6678329825932965
    // Node 56    -0.1679135708225837
    // Node 57    -2.2073884652405478
    // Node 58    -1.023450214816789
    // Node 59    1.3041248622577057
    // Node 60    -2.7699402396839985
    // Node 61    -4.044010295377688
    // Node 62    -0.017738456345352392
    // Node 63    -1.4204684205512927
    // Node 64    10.201139926098747
    // Node 65    -3.4681563428269437
    // Node 66    -3.3729175608294124
    // Node 67    -2.2497501852919477
    // Node 68    -2.8012940020547283
    // Node 69    -1.5862505263337394
    // Node 70    6.7597483876540165
    // Node 71    -2.4883787052093096
    // Node 72    -6.31611323391146
    // Node 73    -6.797729128811679
    // Node 74    -1.8191703014092346
    // Node 75    -5.008976967438286
    // Node 76    -1.4314879483434408
    // Node 77    -3.144886213279701
    // Node 78    0.5242619625200109
    // Node 79    -2.050878807625179
    var node = [];
    node[51] = node_51(data)*(-4.599040924359293);
    node[52] = node_52(data)*(0.22358463263198392);
    node[53] = node_53(data)*(1.9273684743989747);
    node[54] = node_54(data)*(8.655962738510231);
    node[55] = node_55(data)*(1.6678329825932965);
    node[56] = node_56(data)*(-0.1679135708225837);
    node[57] = node_57(data)*(-2.2073884652405478);
    node[58] = node_58(data)*(-1.023450214816789);
    node[59] = node_59(data)*(1.3041248622577057);
    node[60] = node_60(data)*(-2.7699402396839985);
    node[61] = node_61(data)*(-4.044010295377688);
    node[62] = node_62(data)*(-0.017738456345352392);
    node[63] = node_63(data)*(-1.4204684205512927);
    node[64] = node_64(data)*(10.201139926098747);
    node[65] = node_65(data)*(-3.4681563428269437);
    node[66] = node_66(data)*(-3.3729175608294124);
    node[67] = node_67(data)*(-2.2497501852919477);
    node[68] = node_68(data)*(-2.8012940020547283);
    node[69] = node_69(data)*(-1.5862505263337394);
    node[70] = node_70(data)*(6.7597483876540165);
    node[71] = node_71(data)*(-2.4883787052093096);
    node[72] = node_72(data)*(-6.31611323391146);
    node[73] = node_73(data)*(-6.797729128811679);
    node[74] = node_74(data)*(-1.8191703014092346);
    node[75] = node_75(data)*(-5.008976967438286);
    node[76] = node_76(data)*(-1.4314879483434408);
    node[77] = node_77(data)*(-3.144886213279701);
    node[78] = node_78(data)*(0.5242619625200109);
    node[79] = node_79(data)*(-2.050878807625179);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_8(data){
    var Threshold =  -9.674005771664191
    // Node 51    -1.127223421675885
    // Node 52    -4.71281811339098
    // Node 53    -4.470484709721641
    // Node 54    -0.5425689532911365
    // Node 55    -1.8544951386582553
    // Node 56    -3.178310601964528
    // Node 57    -6.373492543961174
    // Node 58    -2.7721350302773033
    // Node 59    -2.206127673340754
    // Node 60    -0.020986145068538985
    // Node 61    -4.027210016274581
    // Node 62    -4.946075859806586
    // Node 63    -5.832858632567608
    // Node 64    -0.45344445903681485
    // Node 65    -8.594220301402462
    // Node 66    -6.512112466992092
    // Node 67    1.8597344615126705
    // Node 68    -0.7337334062914569
    // Node 69    -1.7183723341088184
    // Node 70    -1.7233048296168934
    // Node 71    9.063466817540975
    // Node 72    -4.784565395298849
    // Node 73    7.278812660337269
    // Node 74    -2.5324912260745287
    // Node 75    -2.1897466909339145
    // Node 76    3.9164253743973134
    // Node 77    4.483190599025458
    // Node 78    -1.2431954092554063
    // Node 79    -1.836136002117273
    var node = [];
    node[51] = node_51(data)*(-1.127223421675885);
    node[52] = node_52(data)*(-4.71281811339098);
    node[53] = node_53(data)*(-4.470484709721641);
    node[54] = node_54(data)*(-0.5425689532911365);
    node[55] = node_55(data)*(-1.8544951386582553);
    node[56] = node_56(data)*(-3.178310601964528);
    node[57] = node_57(data)*(-6.373492543961174);
    node[58] = node_58(data)*(-2.7721350302773033);
    node[59] = node_59(data)*(-2.206127673340754);
    node[60] = node_60(data)*(-0.020986145068538985);
    node[61] = node_61(data)*(-4.027210016274581);
    node[62] = node_62(data)*(-4.946075859806586);
    node[63] = node_63(data)*(-5.832858632567608);
    node[64] = node_64(data)*(-0.45344445903681485);
    node[65] = node_65(data)*(-8.594220301402462);
    node[66] = node_66(data)*(-6.512112466992092);
    node[67] = node_67(data)*(1.8597344615126705);
    node[68] = node_68(data)*(-0.7337334062914569);
    node[69] = node_69(data)*(-1.7183723341088184);
    node[70] = node_70(data)*(-1.7233048296168934);
    node[71] = node_71(data)*(9.063466817540975);
    node[72] = node_72(data)*(-4.784565395298849);
    node[73] = node_73(data)*(7.278812660337269);
    node[74] = node_74(data)*(-2.5324912260745287);
    node[75] = node_75(data)*(-2.1897466909339145);
    node[76] = node_76(data)*(3.9164253743973134);
    node[77] = node_77(data)*(4.483190599025458);
    node[78] = node_78(data)*(-1.2431954092554063);
    node[79] = node_79(data)*(-1.836136002117273);
    var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        } 
}

function node_9(data){
    var Threshold  =  -5.079171584152155
    // Node 51    0.3996310809846512
    // Node 52    -2.938665522337056
    // Node 53    -0.7057222023140335
    // Node 54    -4.61701247818733
    // Node 55    1.246679515615355
    // Node 56    1.640134859153069
    // Node 57    -2.470846468863729
    // Node 58    -2.1302676007278363
    // Node 59    1.249302398725466
    // Node 60    -4.2790744085285946
    // Node 61    8.016233915261852
    // Node 62    0.20670492152325293
    // Node 63    -0.7645226118593322
    // Node 64    -3.6135905384364566
    // Node 65    -1.3285325774310586
    // Node 66    -7.029363158059006
    // Node 67    -1.3800070516687897
    // Node 68    -2.0283659234893494
    // Node 69    -0.6903099796802449
    // Node 70    -4.94243208816704
    // Node 71    -0.8438877495893802
    // Node 72    -8.684544774339836
    // Node 73    0.9058429777983652
    // Node 74    -0.6401872585684476
    // Node 75    -1.7689502602683012
    // Node 76    -5.189005280319144
    // Node 77    -8.981082941037917
    // Node 78    -0.7756301702083495
    // Node 79    7.010170382638746
    var node = [];
    node[51] = node_51(data)*(0.3996310809846512);
    node[52] = node_52(data)*(-2.938665522337056);
    node[53] = node_53(data)*(-0.7057222023140335);
    node[54] = node_54(data)*(-4.61701247818733);
    node[55] = node_55(data)*(1.246679515615355);
    node[56] = node_56(data)*(1.640134859153069);
    node[57] = node_57(data)*(-2.470846468863729);
    node[58] = node_58(data)*(-2.1302676007278363);
    node[59] = node_59(data)*(1.249302398725466);
    node[60] = node_60(data)*(-4.2790744085285946);
    node[61] = node_61(data)*(8.016233915261852);
    node[62] = node_62(data)*(0.20670492152325293);
    node[63] = node_63(data)*(-0.7645226118593322);
    node[64] = node_64(data)*(-3.6135905384364566);
    node[65] = node_65(data)*(-1.3285325774310586);
    node[66] = node_66(data)*(-7.029363158059006);
    node[67] = node_67(data)*(-1.3800070516687897);
    node[68] = node_68(data)*(-2.0283659234893494);
    node[69] = node_69(data)*(-0.6903099796802449);
    node[70] = node_70(data)*(-4.94243208816704);
    node[71] = node_71(data)*(-0.8438877495893802);
    node[72] = node_72(data)*(-8.684544774339836);
    node[73] = node_73(data)*(0.9058429777983652);
    node[74] = node_74(data)*(-0.6401872585684476);
    node[75] = node_75(data)*(-1.7689502602683012);
    node[76] = node_76(data)*(-5.189005280319144);
    node[77] = node_77(data)*(-8.981082941037917);
    node[78] = node_78(data)*(-0.7756301702083495);
    node[79] = node_79(data)*(7.010170382638746);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_10(data){
    var Threshold  =  2.4494023857030562
    // Node 51    -8.805364550049612
    // Node 52    -4.14177698763525
    // Node 53    -2.7535623119716246
    // Node 54    -0.5325227119182004
    // Node 55    -3.080765916379779
    // Node 56    -3.129129514026859
    // Node 57    -6.542271196100086
    // Node 58    -19.76340573091272
    // Node 59    -3.6230037998137634
    // Node 60    -2.98645448264032
    // Node 61    9.737855060267488
    // Node 62    -2.44475841452815
    // Node 63    -9.861458583185506
    // Node 64    -0.44603705369017005
    // Node 65    -5.85713674822419
    // Node 66    4.297131895453479
    // Node 67    5.068779154532429
    // Node 68    1.9214478142298852
    // Node 69    0.004426109871491833
    // Node 70    -4.267366151495183
    // Node 71    -1.84991961976198
    // Node 72    -10.414168213781734
    // Node 73    0.5756195347053318
    // Node 74    -0.12952299249273466
    // Node 75    -5.130855648216377
    // Node 76    1.1763793576704207
    // Node 77    -12.522255990761302
    // Node 78    15.041794819019673
    // Node 79    -1.347997904568447
    var node = [];
    node[51] = node_51(data)*(-8.805364550049612);
    node[52] = node_52(data)*(-4.14177698763525);
    node[53] = node_53(data)*(-2.7535623119716246);
    node[54] = node_54(data)*(-0.5325227119182004);
    node[55] = node_55(data)*(-3.080765916379779);
    node[56] = node_56(data)*(-3.129129514026859);
    node[57] = node_57(data)*(-6.542271196100086);
    node[58] = node_58(data)*(-19.76340573091272);
    node[59] = node_59(data)*(-3.6230037998137634);
    node[60] = node_60(data)*(-2.98645448264032);
    node[61] = node_61(data)*(9.737855060267488);
    node[62] = node_62(data)*(-2.44475841452815);
    node[63] = node_63(data)*(-9.861458583185506);
    node[64] = node_64(data)*(-0.44603705369017005);
    node[65] = node_65(data)*(-5.85713674822419);
    node[66] = node_66(data)*(4.297131895453479);
    node[67] = node_67(data)*(5.068779154532429);
    node[68] = node_68(data)*(1.9214478142298852);
    node[69] = node_69(data)*(0.004426109871491833);
    node[70] = node_70(data)*(-4.267366151495183);
    node[71] = node_71(data)*(-1.84991961976198);
    node[72] = node_72(data)*(-10.414168213781734);
    node[73] = node_73(data)*(0.5756195347053318);
    node[74] = node_74(data)*(-0.12952299249273466);
    node[75] = node_75(data)*(-5.130855648216377);
    node[76] = node_76(data)*(1.1763793576704207);
    node[77] = node_77(data)*(-12.522255990761302);
    node[78] = node_78(data)*(15.041794819019673);
    node[79] = node_79(data)*(-1.347997904568447);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_11(data){
    var Threshold  =  -3.205988004061843
    // Node 51    -3.034574231688708
    // Node 52    3.6651449766588695
    // Node 53    -0.5696172694018871
    // Node 54    -1.2010066702784599
    // Node 55    4.9004504614153666
    // Node 56    -1.454448644178815
    // Node 57    0.2509770571537314
    // Node 58    -9.644468031964442
    // Node 59    2.1800383363539173
    // Node 60    -9.521699120223076
    // Node 61    10.079670239700702
    // Node 62    -1.640446597690773
    // Node 63    -0.6546334729522469
    // Node 64    -0.6130467993245519
    // Node 65    -0.7883738214941896
    // Node 66    -1.6441357367510865
    // Node 67    -2.1407670235612706
    // Node 68    -1.566720805723851
    // Node 69    -0.44978980764850224
    // Node 70    -1.633913290028406
    // Node 71    -1.6771396851098759
    // Node 72    -4.238962215847721
    // Node 73    -0.31744372743725946
    // Node 74    -0.5238946345098674
    // Node 75    -1.7808571959752473
    // Node 76    -1.7665364837312132
    // Node 77    -10.870431913419038
    // Node 78    -0.5466002307355435
    // Node 79    -8.430316703422445
    var node = [];
    node[51] = node_51(data)*(-3.034574231688708);
    node[52] = node_52(data)*(3.6651449766588695);
    node[53] = node_53(data)*(-0.5696172694018871);
    node[54] = node_54(data)*(-1.2010066702784599);
    node[55] = node_55(data)*(4.9004504614153666);
    node[56] = node_56(data)*(-1.454448644178815);
    node[57] = node_57(data)*(0.2509770571537314);
    node[58] = node_58(data)*(-9.644468031964442);
    node[59] = node_59(data)*(2.1800383363539173);
    node[60] = node_60(data)*(-9.521699120223076);
    node[61] = node_61(data)*(10.079670239700702);
    node[62] = node_62(data)*(-1.640446597690773);
    node[63] = node_63(data)*(-0.6546334729522469);
    node[64] = node_64(data)*(-0.6130467993245519);
    node[65] = node_65(data)*(-0.7883738214941896);
    node[66] = node_66(data)*(-1.6441357367510865);
    node[67] = node_67(data)*(-2.1407670235612706);
    node[68] = node_68(data)*(-1.566720805723851);
    node[69] = node_69(data)*(-0.44978980764850224);
    node[70] = node_70(data)*(-1.633913290028406);
    node[71] = node_71(data)*(-1.6771396851098759);
    node[72] = node_72(data)*(-4.238962215847721);
    node[73] = node_73(data)*(-0.31744372743725946);
    node[74] = node_74(data)*(-0.5238946345098674);
    node[75] = node_75(data)*(-1.7808571959752473);
    node[76] = node_76(data)*(-1.7665364837312132);
    node[77] = node_77(data)*(-10.870431913419038);
    node[78] = node_78(data)*(-0.5466002307355435);
    node[79] = node_79(data)*(-8.430316703422445);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_12(data){
    var Threshold  =  -2.0433185739699504
    // Node 51    1.1384555103705847
    // Node 52    -9.594720477932313
    // Node 53    -1.8617899964671027
    // Node 54    -0.9588659765978309
    // Node 55    6.770344721570194
    // Node 56    -11.010614785580607
    // Node 57    7.50864599737044
    // Node 58    -10.574529193377527
    // Node 59    -6.543004315765242
    // Node 60    -1.0209311889881882
    // Node 61    7.989877621245421
    // Node 62    2.6815023598625873
    // Node 63    -6.305268900997903
    // Node 64    -0.5591039899724727
    // Node 65    -12.155122507564906
    // Node 66    6.200410903729708
    // Node 67    -11.75649541580024
    // Node 68    -4.3198780451103564
    // Node 69    -0.7527322259454033
    // Node 70    -1.53979978266751
    // Node 71    -9.213303510633985
    // Node 72    -9.515344042096984
    // Node 73    5.154824844051888
    // Node 74    -1.646683717353572
    // Node 75    -3.509190866418217
    // Node 76    -12.470018898131517
    // Node 77    -7.069037721018428
    // Node 78    -1.3717239490516984
    // Node 79    -3.422752575127069
    var node = [];
    node[51] = node_51(data)*(1.1384555103705847);
    node[52] = node_52(data)*(-9.594720477932313);
    node[53] = node_53(data)*(-1.8617899964671027);
    node[54] = node_54(data)*(-0.9588659765978309);
    node[55] = node_55(data)*(6.770344721570194);
    node[56] = node_56(data)*(-11.010614785580607);
    node[57] = node_57(data)*(7.50864599737044);
    node[58] = node_58(data)*(-10.574529193377527);
    node[59] = node_59(data)*(-6.543004315765242);
    node[60] = node_60(data)*(-1.0209311889881882);
    node[61] = node_61(data)*(7.989877621245421);
    node[62] = node_62(data)*(2.6815023598625873);
    node[63] = node_63(data)*(-6.305268900997903);
    node[64] = node_64(data)*(-0.5591039899724727);
    node[65] = node_65(data)*(-12.155122507564906);
    node[66] = node_66(data)*(6.200410903729708);
    node[67] = node_67(data)*(-11.75649541580024);
    node[68] = node_68(data)*(-4.3198780451103564);
    node[69] = node_69(data)*(-0.7527322259454033);
    node[70] = node_70(data)*(-1.53979978266751);
    node[71] = node_71(data)*(-9.213303510633985);
    node[72] = node_72(data)*(-9.515344042096984);
    node[73] = node_73(data)*(5.154824844051888);
    node[74] = node_74(data)*(-1.646683717353572);
    node[75] = node_75(data)*(-3.509190866418217);
    node[76] = node_76(data)*(-12.470018898131517);
    node[77] = node_77(data)*(-7.069037721018428);
    node[78] = node_78(data)*(-1.3717239490516984);
    node[79] = node_79(data)*(-3.422752575127069);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_13(data){
    var Threshold  =  -8.797358588103204
    // Node 51    -3.282281903230948
    // Node 52    -1.0983665502111046
    // Node 53    -5.474637559460813
    // Node 54    -4.8811559376828635
    // Node 55    4.227764945621033
    // Node 56    -9.190059375587582
    // Node 57    -0.18641776705243254
    // Node 58    -11.332639628160601
    // Node 59    8.380197069534566
    // Node 60    -16.330262617876233
    // Node 61    5.674640835496526
    // Node 62    -5.993445284532471
    // Node 63    10.780491952127935
    // Node 64    -2.10075291158654
    // Node 65    8.796858412748282
    // Node 66    8.11613937371871
    // Node 67    -14.980754854511497
    // Node 68    -8.738819503339636
    // Node 69    10.968616569493262
    // Node 70    -9.242721537429029
    // Node 71    -0.3536347154533543
    // Node 72    -5.517719142759446
    // Node 73    -7.614902228812717
    // Node 74    -6.5355815503514325
    // Node 75    -1.0995723111739624
    // Node 76    14.279052568584326
    // Node 77    -15.01210303148795
    // Node 78    -0.8859054034352095
    // Node 79    2.3273977779661403
    var node = [];
    node[51] = node_51(data)*(-3.282281903230948);
    node[52] = node_52(data)*(-1.0983665502111046);
    node[53] = node_53(data)*(-5.474637559460813);
    node[54] = node_54(data)*(-4.8811559376828635);
    node[55] = node_55(data)*(4.227764945621033);
    node[56] = node_56(data)*(-9.190059375587582);
    node[57] = node_57(data)*(-0.18641776705243254);
    node[58] = node_58(data)*(-11.332639628160601);
    node[59] = node_59(data)*(8.380197069534566);
    node[60] = node_60(data)*(-16.330262617876233);
    node[61] = node_61(data)*(5.674640835496526);
    node[62] = node_62(data)*(-5.993445284532471);
    node[63] = node_63(data)*(10.780491952127935);
    node[64] = node_64(data)*(-2.10075291158654);
    node[65] = node_65(data)*(8.796858412748282);
    node[66] = node_66(data)*(8.11613937371871);
    node[67] = node_67(data)*(-14.980754854511497);
    node[68] = node_68(data)*(-8.738819503339636);
    node[69] = node_69(data)*(10.968616569493262);
    node[70] = node_70(data)*(-9.242721537429029);
    node[71] = node_71(data)*(-0.3536347154533543);
    node[72] = node_72(data)*(-5.517719142759446);
    node[73] = node_73(data)*(-7.614902228812717);
    node[74] = node_74(data)*(-6.5355815503514325);
    node[75] = node_75(data)*(-1.0995723111739624);
    node[76] = node_76(data)*(14.279052568584326);
    node[77] = node_77(data)*(-15.01210303148795);
    node[78] = node_78(data)*(-0.8859054034352095);
    node[79] = node_79(data)*(2.3273977779661403);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_14(data){
    var Threshold =  -7.9195314889861255
    // Node 51    0.30560284144269917
    // Node 52    -7.596760293846716
    // Node 53    -0.6382091030810388
    // Node 54    -0.5699848502304304
    // Node 55    -5.460549797342393
    // Node 56    -1.9474792428879082
    // Node 57    -3.458599825137449
    // Node 58    13.438112831354875
    // Node 59    -2.82801591428147
    // Node 60    0.7664108444780472
    // Node 61    2.3964757403155414
    // Node 62    5.534832485457769
    // Node 63    -3.32508980716422
    // Node 64    -0.4051838583623792
    // Node 65    -11.349632967003995
    // Node 66    -6.047099646165103
    // Node 67    0.9913227725701562
    // Node 68    -0.6054760723406425
    // Node 69    -0.6316672572151826
    // Node 70    -0.7392717069841677
    // Node 71    -3.5950285472941856
    // Node 72    -7.166107786296297
    // Node 73    4.041688547919303
    // Node 74    -0.9290663756806173
    // Node 75    -6.446311101632264
    // Node 76    -6.555894466041046
    // Node 77    -3.48488114811839
    // Node 78    -0.5494487476780998
    // Node 79    -1.2512021052045732
    var node = [];
    node[51] = node_51(data)*(0.30560284144269917);
    node[52] = node_52(data)*(-7.596760293846716);
    node[53] = node_53(data)*(-0.6382091030810388);
    node[54] = node_54(data)*(-0.5699848502304304);
    node[55] = node_55(data)*(-5.460549797342393);
    node[56] = node_56(data)*(-1.9474792428879082);
    node[57] = node_57(data)*(-3.458599825137449);
    node[58] = node_58(data)*(13.438112831354875);
    node[59] = node_59(data)*(-2.82801591428147);
    node[60] = node_60(data)*(0.7664108444780472);
    node[61] = node_61(data)*(2.3964757403155414);
    node[62] = node_62(data)*(5.534832485457769);
    node[63] = node_63(data)*(-3.32508980716422);
    node[64] = node_64(data)*(-0.4051838583623792);
    node[65] = node_65(data)*(-11.349632967003995);
    node[66] = node_66(data)*(-6.047099646165103);
    node[67] = node_67(data)*(0.9913227725701562);
    node[68] = node_68(data)*(-0.6054760723406425);
    node[69] = node_69(data)*(-0.6316672572151826);
    node[70] = node_70(data)*(-0.7392717069841677);
    node[71] = node_71(data)*(-3.5950285472941856);
    node[72] = node_72(data)*(-7.166107786296297);
    node[73] = node_73(data)*(4.041688547919303);
    node[74] = node_74(data)*(-0.9290663756806173);
    node[75] = node_75(data)*(-6.446311101632264);
    node[76] = node_76(data)*(-6.555894466041046);
    node[77] = node_77(data)*(-3.48488114811839);
    node[78] = node_78(data)*(-0.5494487476780998);
    node[79] = node_79(data)*(-1.2512021052045732);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_15(data){
    var Threshold  = -2.4606025947557413
    // Node 51    -3.608112460429358
    // Node 52    2.3750175471390245
    // Node 53    -0.6467176579863555
    // Node 54    -1.4652169310696497
    // Node 55    -7.469778105502243
    // Node 56    3.021454076818613
    // Node 57    6.521629267055143
    // Node 58    -8.262404144000623
    // Node 59    -3.8444676137288756
    // Node 60    -10.360345611063847
    // Node 61    2.469129960705765
    // Node 62    -1.4148256564312776
    // Node 63    -2.1360813461815957
    // Node 64    -0.8346546233744941
    // Node 65    3.4284135761296803
    // Node 66    -8.690394700127818
    // Node 67    -4.522755087932794
    // Node 68    -2.5427626648871997
    // Node 69    -0.5763323753691854
    // Node 70    -3.305427442767826
    // Node 71    -10.718621284543213
    // Node 72    -0.013875109586576976
    // Node 73    -7.84405319483577
    // Node 74    -0.4867451367151186
    // Node 75    -0.34086262542768786
    // Node 76    -7.18368027701997
    // Node 77    1.7695794345053397
    // Node 78    -0.6998439826656535
    // Node 79    -3.3984224017637055
    var node = [];
    node[51] = node_51(data)*(-3.608112460429358);
    node[52] = node_52(data)*(2.3750175471390245);
    node[53] = node_53(data)*(-0.6467176579863555);
    node[54] = node_54(data)*(-1.4652169310696497);
    node[55] = node_55(data)*(-7.469778105502243);
    node[56] = node_56(data)*(3.021454076818613);
    node[57] = node_57(data)*(6.521629267055143);
    node[58] = node_58(data)*(-8.262404144000623);
    node[59] = node_59(data)*(-3.8444676137288756);
    node[60] = node_60(data)*(-10.360345611063847);
    node[61] = node_61(data)*(2.469129960705765);
    node[62] = node_62(data)*(-1.4148256564312776);
    node[63] = node_63(data)*(-2.1360813461815957);
    node[64] = node_64(data)*(-0.8346546233744941);
    node[65] = node_65(data)*(3.4284135761296803);
    node[66] = node_66(data)*(-8.690394700127818);
    node[67] = node_67(data)*(-4.522755087932794);
    node[68] = node_68(data)*(-2.5427626648871997);
    node[69] = node_69(data)*(-0.5763323753691854);
    node[70] = node_70(data)*(-3.305427442767826);
    node[71] = node_71(data)*(-10.718621284543213);
    node[72] = node_72(data)*(-0.013875109586576976);
    node[73] = node_73(data)*(-7.84405319483577);
    node[74] = node_74(data)*(-0.4867451367151186);
    node[75] = node_75(data)*(-0.34086262542768786);
    node[76] = node_76(data)*(-7.18368027701997);
    node[77] = node_77(data)*(1.7695794345053397);
    node[78] = node_78(data)*(-0.6998439826656535);
    node[79] = node_79(data)*(-3.3984224017637055);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_16(data){
    var Threshold =  -7.262728363550336
    // Node 51    -4.944924885141413
    // Node 52    -1.9498412197691317
    // Node 53    -0.8768014016185607
    // Node 54    -0.7008357494299189
    // Node 55    -1.3442761488839843
    // Node 56    -1.811485171560934
    // Node 57    -3.626967594053506
    // Node 58    10.823374708309146
    // Node 59    -1.1260150295814342
    // Node 60    -8.406706861454257
    // Node 61    8.807185751813554
    // Node 62    -1.4691538146821685
    // Node 63    -2.959284567410864
    // Node 64    -0.5248670105080815
    // Node 65    -2.8213499281544547
    // Node 66    -4.86711564930836
    // Node 67    3.6037756774487173
    // Node 68    -0.4882437414839458
    // Node 69    -3.987033024901482
    // Node 70    -0.8230705589571915
    // Node 71    -4.845365612042178
    // Node 72    -1.5790612271604725
    // Node 73    -2.681994918732613
    // Node 74    13.044461960008677
    // Node 75    1.6947015420739593
    // Node 76    -1.5672900306579787
    // Node 77    -5.186586238117967
    // Node 78    -0.6694462385462655
    // Node 79    -1.673168650905194
    var node = [];
    node[51] = node_51(data)*(-4.944924885141413);
    node[52] = node_52(data)*(-1.9498412197691317);
    node[53] = node_53(data)*(-0.8768014016185607);
    node[54] = node_54(data)*(-0.7008357494299189);
    node[55] = node_55(data)*(-1.3442761488839843);
    node[56] = node_56(data)*(-1.811485171560934);
    node[57] = node_57(data)*(-3.626967594053506);
    node[58] = node_58(data)*(10.823374708309146);
    node[59] = node_59(data)*(-1.1260150295814342);
    node[60] = node_60(data)*(-8.406706861454257);
    node[61] = node_61(data)*(8.807185751813554);
    node[62] = node_62(data)*(-1.4691538146821685);
    node[63] = node_63(data)*(-2.959284567410864);
    node[64] = node_64(data)*(-0.5248670105080815);
    node[65] = node_65(data)*(-2.8213499281544547);
    node[66] = node_66(data)*(-4.86711564930836);
    node[67] = node_67(data)*(3.6037756774487173);
    node[68] = node_68(data)*(-0.4882437414839458);
    node[69] = node_69(data)*(-3.987033024901482);
    node[70] = node_70(data)*(-0.8230705589571915);
    node[71] = node_71(data)*(-4.845365612042178);
    node[72] = node_72(data)*(-1.5790612271604725);
    node[73] = node_73(data)*(-2.681994918732613);
    node[74] = node_74(data)*(13.044461960008677);
    node[75] = node_75(data)*(1.6947015420739593);
    node[76] = node_76(data)*(-1.5672900306579787);
    node[77] = node_77(data)*(-5.186586238117967);
    node[78] = node_78(data)*(-0.6694462385462655);
    node[79] = node_79(data)*(-1.673168650905194);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_17(data){
    var Threshold  =  -6.611582150736014
    // Node 51    -3.1284172508453088
    // Node 52    -0.8220830137259819
    // Node 53    -6.099798032186191
    // Node 54    -0.5101487833952655
    // Node 55    -0.878705410676788
    // Node 56    -2.0514596011700132
    // Node 57    -4.594659105295577
    // Node 58    -2.1317064320644996
    // Node 59    -0.7082323266910749
    // Node 60    -13.716599539904607
    // Node 61    3.3874666755277816
    // Node 62    -1.4499351008474657
    // Node 63    2.679158874298917
    // Node 64    -0.43108412646736677
    // Node 65    -3.453052880410128
    // Node 66    -5.344433680421228
    // Node 67    -7.458679631604501
    // Node 68    0.3431279311919216
    // Node 69    -1.3394851848903055
    // Node 70    -0.9887022480225542
    // Node 71    -4.4612017191347135
    // Node 72    2.9798101543211555
    // Node 73    5.353132040479735
    // Node 74    5.285755975576294
    // Node 75    2.1892823328286553
    // Node 76    -4.624202841735983
    // Node 77    5.409442619641805
    // Node 78    -2.531220166324658
    // Node 79    -0.9834837650479484
    var node = [];
    node[51] = node_51(data)*(-3.1284172508453088);
    node[52] = node_52(data)*(-0.8220830137259819);
    node[53] = node_53(data)*(-6.099798032186191);
    node[54] = node_54(data)*(-0.5101487833952655);
    node[55] = node_55(data)*(-0.878705410676788);
    node[56] = node_56(data)*(-2.0514596011700132);
    node[57] = node_57(data)*(-4.594659105295577);
    node[58] = node_58(data)*(-2.1317064320644996);
    node[59] = node_59(data)*(-0.7082323266910749);
    node[60] = node_60(data)*(-13.716599539904607);
    node[61] = node_61(data)*(3.3874666755277816);
    node[62] = node_62(data)*(-1.4499351008474657);
    node[63] = node_63(data)*(2.679158874298917);
    node[64] = node_64(data)*(-0.43108412646736677);
    node[65] = node_65(data)*(-3.453052880410128);
    node[66] = node_66(data)*(-5.344433680421228);
    node[67] = node_67(data)*(-7.458679631604501);
    node[68] = node_68(data)*(0.3431279311919216);
    node[69] = node_69(data)*(-1.3394851848903055);
    node[70] = node_70(data)*(-0.9887022480225542);
    node[71] = node_71(data)*(-4.4612017191347135);
    node[72] = node_72(data)*(2.9798101543211555);
    node[73] = node_73(data)*(5.353132040479735);
    node[74] = node_74(data)*(5.285755975576294);
    node[75] = node_75(data)*(2.1892823328286553);
    node[76] = node_76(data)*(-4.624202841735983);
    node[77] = node_77(data)*(5.409442619641805);
    node[78] = node_78(data)*(-2.531220166324658);
    node[79] = node_79(data)*(-0.9834837650479484);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_18(data){
    var Threshold  =  -1.0339283805280053
    // Node 51    -1.6479995899457105
    // Node 52    -1.059057771359907
    // Node 53    -0.6087882699967643
    // Node 54    -0.46881503233586813
    // Node 55    -0.9366327360519704
    // Node 56    -4.6801861325031044
    // Node 57    -19.744689256291565
    // Node 58    -2.8629503966912844
    // Node 59    -0.632163714064264
    // Node 60    -8.312231661965031
    // Node 61    4.81150290480756
    // Node 62    2.2313849032170445
    // Node 63    -7.138570788262984
    // Node 64    -0.39364605240659256
    // Node 65    3.712123135314788
    // Node 66    2.0074022597804158
    // Node 67    -17.00544679933777
    // Node 68    -2.8892249862120307
    // Node 69    -1.5259192263152201
    // Node 70    -0.629593880409687
    // Node 71    2.235751666045602
    // Node 72    3.3717877223405543
    // Node 73    2.9148030036554187
    // Node 74    -6.318619544133317
    // Node 75    -5.534652800010024
    // Node 76    -1.5293408138130826
    // Node 77    -10.264290095316925
    // Node 78    -0.5867694999069171
    // Node 79    -1.019587909666432
    var node = [];
    node[51] = node_51(data)*(-1.6479995899457105);
    node[52] = node_52(data)*(-1.059057771359907);
    node[53] = node_53(data)*(-0.6087882699967643);
    node[54] = node_54(data)*(-0.46881503233586813);
    node[55] = node_55(data)*(-0.9366327360519704);
    node[56] = node_56(data)*(-4.6801861325031044);
    node[57] = node_57(data)*(-19.744689256291565);
    node[58] = node_58(data)*(-2.8629503966912844);
    node[59] = node_59(data)*(-0.632163714064264);
    node[60] = node_60(data)*(-8.312231661965031);
    node[61] = node_61(data)*(4.81150290480756);
    node[62] = node_62(data)*(2.2313849032170445);
    node[63] = node_63(data)*(-7.138570788262984);
    node[64] = node_64(data)*(-0.39364605240659256);
    node[65] = node_65(data)*(3.712123135314788);
    node[66] = node_66(data)*(2.0074022597804158);
    node[67] = node_67(data)*(-17.00544679933777);
    node[68] = node_68(data)*(-2.8892249862120307);
    node[69] = node_69(data)*(-1.5259192263152201);
    node[70] = node_70(data)*(-0.629593880409687);
    node[71] = node_71(data)*(2.235751666045602);
    node[72] = node_72(data)*(3.3717877223405543);
    node[73] = node_73(data)*(2.9148030036554187);
    node[74] = node_74(data)*(-6.318619544133317);
    node[75] = node_75(data)*(-5.534652800010024);
    node[76] = node_76(data)*(-1.5293408138130826);
    node[77] = node_77(data)*(-10.264290095316925);
    node[78] = node_78(data)*(-0.5867694999069171);
    node[79] = node_79(data)*(-1.019587909666432);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_19(data){
    var Threshold  =  -3.736503368553989
    // Node 51    -4.018479321915205
    // Node 52    -0.9152273012936228
    // Node 53    -0.8136762108788869
    // Node 54    -0.5662983335330279
    // Node 55    -0.7882135948836995
    // Node 56    -1.2989562437687578
    // Node 57    -7.299204734311816
    // Node 58    -9.636065782919166
    // Node 59    -0.6373403816747534
    // Node 60    -11.902976967547417
    // Node 61    3.338609715978197
    // Node 62    -2.229857583055061
    // Node 63    4.6492052874187815
    // Node 64    -0.4149928883880457
    // Node 65    -3.9903777992295066
    // Node 66    -2.6621832556144662
    // Node 67    -3.0709279120168933
    // Node 68    -2.1758631023108914
    // Node 69    -6.841651494566929
    // Node 70    -0.7918628655960933
    // Node 71    -0.7533422672137529
    // Node 72    4.334413690738894
    // Node 73    5.6275652042353475
    // Node 74    -6.280759175084645
    // Node 75    -1.1173807425389557
    // Node 76    -1.6045607058936135
    // Node 77    -8.749203170337186
    // Node 78    -0.6487889455744935
    // Node 79    -0.9798230500534442
    var node = [];
    node[51] = node_51(data)*(-4.018479321915205);
    node[52] = node_52(data)*(-0.9152273012936228);
    node[53] = node_53(data)*(-0.8136762108788869);
    node[54] = node_54(data)*(-0.5662983335330279);
    node[55] = node_55(data)*(-0.7882135948836995);
    node[56] = node_56(data)*(-1.2989562437687578);
    node[57] = node_57(data)*(-7.299204734311816);
    node[58] = node_58(data)*(-9.636065782919166);
    node[59] = node_59(data)*(-0.6373403816747534);
    node[60] = node_60(data)*(-11.902976967547417);
    node[61] = node_61(data)*(3.338609715978197);
    node[62] = node_62(data)*(-2.229857583055061);
    node[63] = node_63(data)*(4.6492052874187815);
    node[64] = node_64(data)*(-0.4149928883880457);
    node[65] = node_65(data)*(-3.9903777992295066);
    node[66] = node_66(data)*(-2.6621832556144662);
    node[67] = node_67(data)*(-3.0709279120168933);
    node[68] = node_68(data)*(-2.1758631023108914);
    node[69] = node_69(data)*(-6.841651494566929);
    node[70] = node_70(data)*(-0.7918628655960933);
    node[71] = node_71(data)*(-0.7533422672137529);
    node[72] = node_72(data)*(4.334413690738894);
    node[73] = node_73(data)*(5.6275652042353475);
    node[74] = node_74(data)*(-6.280759175084645);
    node[75] = node_75(data)*(-1.1173807425389557);
    node[76] = node_76(data)*(-1.6045607058936135);
    node[77] = node_77(data)*(-8.749203170337186);
    node[78] = node_78(data)*(-0.6487889455744935);
    node[79] = node_79(data)*(-0.9798230500534442);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_20(data){
    var Threshold  =  -5.7006819027557
    // Node 51    -2.2636083849130175
    // Node 52    -2.5059112888157147
    // Node 53    -0.8421893223962599
    // Node 54    -0.5188906045345626
    // Node 55    -1.9815767772089854
    // Node 56    -1.4962904652209588
    // Node 57    -8.04561789043061
    // Node 58    8.042744899159022
    // Node 59    -1.0222971503135043
    // Node 60    -6.461312606495168
    // Node 61    5.870287300926103
    // Node 62    -1.5143035432112972
    // Node 63    0.220729544365179
    // Node 64    -0.4631124228485122
    // Node 65    -7.497961770692252
    // Node 66    -4.002582559177654
    // Node 67    -1.564179582937543
    // Node 68    -1.4071971369173184
    // Node 69    -1.5964004094887543
    // Node 70    -0.8187751491417747
    // Node 71    -2.4681354211235953
    // Node 72    0.7583389520195862
    // Node 73    7.496518144769548
    // Node 74    -3.173980448101839
    // Node 75    -6.434064902123979
    // Node 76    -1.8223014901889143
    // Node 77    -1.8307992105327455
    // Node 78    -0.5394394337635001
    // Node 79    -1.384843617042936
    var node = [];
    node[51] = node_51(data)*(-2.2636083849130175);
    node[52] = node_52(data)*(-2.5059112888157147);
    node[53] = node_53(data)*(-0.8421893223962599);
    node[54] = node_54(data)*(-0.5188906045345626);
    node[55] = node_55(data)*(-1.9815767772089854);
    node[56] = node_56(data)*(-1.4962904652209588);
    node[57] = node_57(data)*(-8.04561789043061);
    node[58] = node_58(data)*(8.042744899159022);
    node[59] = node_59(data)*(-1.0222971503135043);
    node[60] = node_60(data)*(-6.461312606495168);
    node[61] = node_61(data)*(5.870287300926103);
    node[62] = node_62(data)*(-1.5143035432112972);
    node[63] = node_63(data)*(0.220729544365179);
    node[64] = node_64(data)*(-0.4631124228485122);
    node[65] = node_65(data)*(-7.497961770692252);
    node[66] = node_66(data)*(-4.002582559177654);
    node[67] = node_67(data)*(-1.564179582937543);
    node[68] = node_68(data)*(-1.4071971369173184);
    node[69] = node_69(data)*(-1.5964004094887543);
    node[70] = node_70(data)*(-0.8187751491417747);
    node[71] = node_71(data)*(-2.4681354211235953);
    node[72] = node_72(data)*(0.7583389520195862);
    node[73] = node_73(data)*(7.496518144769548);
    node[74] = node_74(data)*(-3.173980448101839);
    node[75] = node_75(data)*(-6.434064902123979);
    node[76] = node_76(data)*(-1.8223014901889143);
    node[77] = node_77(data)*(-1.8307992105327455);
    node[78] = node_78(data)*(-0.5394394337635001);
    node[79] = node_79(data)*(-1.384843617042936);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_21(data){
    var Threshold  =  -6.218569141545179
    // Node 51    -6.207676582928213
    // Node 52    -1.199873841257496
    // Node 53    -4.111520531154282
    // Node 54    -1.1835461091039248
    // Node 55    -0.07817955305207169
    // Node 56    3.586034307787223
    // Node 57    -0.25027987847392197
    // Node 58    -0.228509425998743
    // Node 59    2.0950528270160973
    // Node 60    -8.65972635306448
    // Node 61    3.796798423711188
    // Node 62    -3.3445107054347463
    // Node 63    -3.0623067375606268
    // Node 64    -4.672613429587813
    // Node 65    -0.8584113953076914
    // Node 66    -5.730852066325666
    // Node 67    -3.3874641906484935
    // Node 68    -3.231394853476854
    // Node 69    -0.9969466243453818
    // Node 70    6.28061059566403
    // Node 71    -3.1379327293604087
    // Node 72    5.41492770325273
    // Node 73    -6.596048295249044
    // Node 74    -1.547478540038613
    // Node 75    -1.9492865087906894
    // Node 76    -9.07584045843186
    // Node 77    1.2229947655233977
    // Node 78    -1.722031090512506
    // Node 79    2.944808434599414
    var node = [];
    node[51] = node_51(data)*(-6.207676582928213);
    node[52] = node_52(data)*(-1.199873841257496);
    node[53] = node_53(data)*(-4.111520531154282);
    node[54] = node_54(data)*(-1.1835461091039248);
    node[55] = node_55(data)*(-0.07817955305207169);
    node[56] = node_56(data)*(3.586034307787223);
    node[57] = node_57(data)*(-0.25027987847392197);
    node[58] = node_58(data)*(-0.228509425998743);
    node[59] = node_59(data)*(2.0950528270160973);
    node[60] = node_60(data)*(-8.65972635306448);
    node[61] = node_61(data)*(3.796798423711188);
    node[62] = node_62(data)*(-3.3445107054347463);
    node[63] = node_63(data)*(-3.0623067375606268);
    node[64] = node_64(data)*(-4.672613429587813);
    node[65] = node_65(data)*(-0.8584113953076914);
    node[66] = node_66(data)*(-5.730852066325666);
    node[67] = node_67(data)*(-3.3874641906484935);
    node[68] = node_68(data)*(-3.231394853476854);
    node[69] = node_69(data)*(-0.9969466243453818);
    node[70] = node_70(data)*(6.28061059566403);
    node[71] = node_71(data)*(-3.1379327293604087);
    node[72] = node_72(data)*(5.41492770325273);
    node[73] = node_73(data)*(-6.596048295249044);
    node[74] = node_74(data)*(-1.547478540038613);
    node[75] = node_75(data)*(-1.9492865087906894);
    node[76] = node_76(data)*(-9.07584045843186);
    node[77] = node_77(data)*(1.2229947655233977);
    node[78] = node_78(data)*(-1.722031090512506);
    node[79] = node_79(data)*(2.944808434599414);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_22(data){
    var Threshold =   -7.2211395779247
    // Node 51    7.242974291861506
    // Node 52    -7.7507784451776764
    // Node 53    -1.2415762443023015
    // Node 54    -0.633412606325824
    // Node 55    -13.64068361228549
    // Node 56    1.5578770111317628
    // Node 57    -1.0388599051299146
    // Node 58    -1.0006080277057003
    // Node 59    -2.5084647021430295
    // Node 60    -10.055592070742867
    // Node 61    1.4089732495503522
    // Node 62    -0.9923362992720169
    // Node 63    -5.152243474009105
    // Node 64    -0.4851024494603021
    // Node 65    -2.5676817636160703
    // Node 66    2.5412873462924606
    // Node 67    -2.5215759470512906
    // Node 68    2.4888534364055364
    // Node 69    -1.4292050808174028
    // Node 70    -2.0699977564674645
    // Node 71    -7.708763723869587
    // Node 72    3.7176082187123725
    // Node 73    3.609368799686348
    // Node 74    -2.0639623007287846
    // Node 75    -5.097859100663309
    // Node 76    -3.035478164695172
    // Node 77    -4.614679186163159
    // Node 78    -1.1950760224179011
    // Node 79    -8.842716986006979
    var node = [];
    node[51] = node_51(data)*(7.242974291861506);
    node[52] = node_52(data)*(-7.7507784451776764);
    node[53] = node_53(data)*(-1.2415762443023015);
    node[54] = node_54(data)*(-0.633412606325824);
    node[55] = node_55(data)*(-13.64068361228549);
    node[56] = node_56(data)*(1.5578770111317628);
    node[57] = node_57(data)*(-1.0388599051299146);
    node[58] = node_58(data)*(-1.0006080277057003);
    node[59] = node_59(data)*(-2.5084647021430295);
    node[60] = node_60(data)*(-10.055592070742867);
    node[61] = node_61(data)*(1.4089732495503522);
    node[62] = node_62(data)*(-0.9923362992720169);
    node[63] = node_63(data)*(-5.152243474009105);
    node[64] = node_64(data)*(-0.4851024494603021);
    node[65] = node_65(data)*(-2.5676817636160703);
    node[66] = node_66(data)*(2.5412873462924606);
    node[67] = node_67(data)*(-2.5215759470512906);
    node[68] = node_68(data)*(2.4888534364055364);
    node[69] = node_69(data)*(-1.4292050808174028);
    node[70] = node_70(data)*(-2.0699977564674645);
    node[71] = node_71(data)*(-7.708763723869587);
    node[72] = node_72(data)*(3.7176082187123725);
    node[73] = node_73(data)*(3.609368799686348);
    node[74] = node_74(data)*(-2.0639623007287846);
    node[75] = node_75(data)*(-5.097859100663309);
    node[76] = node_76(data)*(-3.035478164695172);
    node[77] = node_77(data)*(-4.614679186163159);
    node[78] = node_78(data)*(-1.1950760224179011);
    node[79] = node_79(data)*(-8.842716986006979);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_23(data){
    var Threshold  = -13.508789484149343
    // Node 51    -0.3678716911244896
    // Node 52    -3.5658324527373355
    // Node 53    -0.6793430845260358
    // Node 54    -0.5519877574216319
    // Node 55    -1.8532804235229032
    // Node 56    -11.781523089179545
    // Node 57    16.814013642512908
    // Node 58    -8.908924656189397
    // Node 59    -0.8968434357597777
    // Node 60    -11.215709733638628
    // Node 61    2.1212663013270046
    // Node 62    -6.890579082685153
    // Node 63    -4.4895256167801145
    // Node 64    -0.41024881202814495
    // Node 65    -2.430459617754677
    // Node 66    3.8620520290589773
    // Node 67    -10.499166093211441
    // Node 68    -0.589059090954036
    // Node 69    -2.069768156020408
    // Node 70    -0.9827995830175189
    // Node 71    2.851709453578796
    // Node 72    2.5892089486996013
    // Node 73    -0.5232150025979715
    // Node 74    -3.5130194853387975
    // Node 75    2.334034549940083
    // Node 76    -2.5365987869968376
    // Node 77    -4.715447651136559
    // Node 78    -0.6576060893396773
    // Node 79    -1.6402331132865855
    var node = [];
    node[51] = node_51(data)*(-0.3678716911244896);
    node[52] = node_52(data)*(-3.5658324527373355);
    node[53] = node_53(data)*(-0.6793430845260358);
    node[54] = node_54(data)*(-0.5519877574216319);
    node[55] = node_55(data)*(-1.8532804235229032);
    node[56] = node_56(data)*(-11.781523089179545);
    node[57] = node_57(data)*(16.814013642512908);
    node[58] = node_58(data)*(-8.908924656189397);
    node[59] = node_59(data)*(-0.8968434357597777);
    node[60] = node_60(data)*(-11.215709733638628);
    node[61] = node_61(data)*(2.1212663013270046);
    node[62] = node_62(data)*(-6.890579082685153);
    node[63] = node_63(data)*(-4.4895256167801145);
    node[64] = node_64(data)*(-0.41024881202814495);
    node[65] = node_65(data)*(-2.430459617754677);
    node[66] = node_66(data)*(3.8620520290589773);
    node[67] = node_67(data)*(-10.499166093211441);
    node[68] = node_68(data)*(-0.589059090954036);
    node[69] = node_69(data)*(-2.069768156020408);
    node[70] = node_70(data)*(-0.9827995830175189);
    node[71] = node_71(data)*(2.851709453578796);
    node[72] = node_72(data)*(2.5892089486996013);
    node[73] = node_73(data)*(-0.5232150025979715);
    node[74] = node_74(data)*(-3.5130194853387975);
    node[75] = node_75(data)*(2.334034549940083);
    node[76] = node_76(data)*(-2.5365987869968376);
    node[77] = node_77(data)*(-4.715447651136559);
    node[78] = node_78(data)*(-0.6576060893396773);
    node[79] = node_79(data)*(-1.6402331132865855);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_24(data){
    var Threshold  =  -6.743463364435652
    // Node 51    2.9632900409002856
    // Node 52    -1.2551465897269443
    // Node 53    -1.8636233361382206
    // Node 54    -1.3588879604003075
    // Node 55    11.639340851044839
    // Node 56    4.813840019897263
    // Node 57    -2.743076070442604
    // Node 58    -0.2236680063179465
    // Node 59    -2.564493051280225
    // Node 60    -2.8894358223036516
    // Node 61    -2.397911270407629
    // Node 62    -0.4615437886720553
    // Node 63    -2.01739741973608
    // Node 64    -0.920397938430795
    // Node 65    -0.7402645534349637
    // Node 66    -13.742650520593855
    // Node 67    -1.5749761931765467
    // Node 68    4.875831738773256
    // Node 69    -1.2051649127489126
    // Node 70    -2.4945373590954674
    // Node 71    -2.9740991884765866
    // Node 72    -1.5047117988805458
    // Node 73    -0.2781458260606584
    // Node 74    -1.3013742636014847
    // Node 75    -2.4200247812958766
    // Node 76    -2.7536388638162634
    // Node 77    -6.67816626148299
    // Node 78    -1.6998635004355915
    // Node 79    -6.559203301843952
    var node = [];
    node[51] = node_51(data)*(2.9632900409002856);
    node[52] = node_52(data)*(-1.2551465897269443);
    node[53] = node_53(data)*(-1.8636233361382206);
    node[54] = node_54(data)*(-1.3588879604003075);
    node[55] = node_55(data)*(11.639340851044839);
    node[56] = node_56(data)*(4.813840019897263);
    node[57] = node_57(data)*(-2.743076070442604);
    node[58] = node_58(data)*(-0.2236680063179465);
    node[59] = node_59(data)*(-2.564493051280225);
    node[60] = node_60(data)*(-2.8894358223036516);
    node[61] = node_61(data)*(-2.397911270407629);
    node[62] = node_62(data)*(-0.4615437886720553);
    node[63] = node_63(data)*(-2.01739741973608);
    node[64] = node_64(data)*(-0.920397938430795);
    node[65] = node_65(data)*(-0.7402645534349637);
    node[66] = node_66(data)*(-13.742650520593855);
    node[67] = node_67(data)*(-1.5749761931765467);
    node[68] = node_68(data)*(4.875831738773256);
    node[69] = node_69(data)*(-1.2051649127489126);
    node[70] = node_70(data)*(-2.4945373590954674);
    node[71] = node_71(data)*(-2.9740991884765866);
    node[72] = node_72(data)*(-1.5047117988805458);
    node[73] = node_73(data)*(-0.2781458260606584);
    node[74] = node_74(data)*(-1.3013742636014847);
    node[75] = node_75(data)*(-2.4200247812958766);
    node[76] = node_76(data)*(-2.7536388638162634);
    node[77] = node_77(data)*(-6.67816626148299);
    node[78] = node_78(data)*(-1.6998635004355915);
    node[79] = node_79(data)*(-6.559203301843952);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_25(data){
    var Threshold  =  -5.820482946045258
    // Node 51    -1.767140928684162
    // Node 52    -11.219422953249492
    // Node 53    -0.6737207631173412
    // Node 54    -0.6713561617463274
    // Node 55    -5.438909627913057
    // Node 56    -1.5573336900065549
    // Node 57    4.488556450318562
    // Node 58    5.3321049463859715
    // Node 59    -1.7038600121506369
    // Node 60    -3.519860662432012
    // Node 61    -1.1303866547338144
    // Node 62    -0.1787806891347228
    // Node 63    -2.1631798014161063
    // Node 64    -0.4580869081078165
    // Node 65    0.03717451348208848
    // Node 66    1.6938265083330697
    // Node 67    -5.5289407294054485
    // Node 68    -1.0289442327151004
    // Node 69    -0.7626869772028083
    // Node 70    -1.0614162286283138
    // Node 71    -7.644229153845782
    // Node 72    3.0534765790801104
    // Node 73    -5.996179884889568
    // Node 74    -0.948530743919444
    // Node 75    -2.915733167838622
    // Node 76    -10.334489788048543
    // Node 77    -3.020945314577106
    // Node 78    -0.6570284251949381
    // Node 79    -3.0135758435004636
    var node = [];
    node[51] = node_51(data)*(-1.767140928684162);
    node[52] = node_52(data)*(-11.219422953249492);
    node[53] = node_53(data)*(-0.6737207631173412);
    node[54] = node_54(data)*(-0.6713561617463274);
    node[55] = node_55(data)*(-5.438909627913057);
    node[56] = node_56(data)*(-1.5573336900065549);
    node[57] = node_57(data)*(4.488556450318562);
    node[58] = node_58(data)*(5.3321049463859715);
    node[59] = node_59(data)*(-1.7038600121506369);
    node[60] = node_60(data)*(-3.519860662432012);
    node[61] = node_61(data)*(-1.1303866547338144);
    node[62] = node_62(data)*(-0.1787806891347228);
    node[63] = node_63(data)*(-2.1631798014161063);
    node[64] = node_64(data)*(-0.4580869081078165);
    node[65] = node_65(data)*(0.03717451348208848);
    node[66] = node_66(data)*(1.6938265083330697);
    node[67] = node_67(data)*(-5.5289407294054485);
    node[68] = node_68(data)*(-1.0289442327151004);
    node[69] = node_69(data)*(-0.7626869772028083);
    node[70] = node_70(data)*(-1.0614162286283138);
    node[71] = node_71(data)*(-7.644229153845782);
    node[72] = node_72(data)*(3.0534765790801104);
    node[73] = node_73(data)*(-5.996179884889568);
    node[74] = node_74(data)*(-0.948530743919444);
    node[75] = node_75(data)*(-2.915733167838622);
    node[76] = node_76(data)*(-10.334489788048543);
    node[77] = node_77(data)*(-3.020945314577106);
    node[78] = node_78(data)*(-0.6570284251949381);
    node[79] = node_79(data)*(-3.0135758435004636);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_26(data){
    var Threshold   = -2.7279482272287168
    // Node 51    4.883683768593507
    // Node 52    -1.961635317790739
    // Node 53    -2.6634003221780485
    // Node 54    -0.5848270713742035
    // Node 55    -2.1697672801309413
    // Node 56    -3.4672499314091847
    // Node 57    -5.294892034029173
    // Node 58    -1.990422980032256
    // Node 59    -1.8366520853291743
    // Node 60    -5.022206062955449
    // Node 61    0.3237612000410025
    // Node 62    -0.4053328463722717
    // Node 63    -0.8387460542313333
    // Node 64    -0.44078566685590864
    // Node 65    -3.68690661539132
    // Node 66    -0.9749096754758357
    // Node 67    -5.659592021263462
    // Node 68    2.710775941435593
    // Node 69    -4.37893546584105
    // Node 70    -1.3723745363317654
    // Node 71    0.5232354213453188
    // Node 72    -6.087876120000325
    // Node 73    4.205156273801273
    // Node 74    -3.907413891293416
    // Node 75    -3.3193596284984936
    // Node 76    -1.9878485537631285
    // Node 77    -3.458232475106313
    // Node 78    -1.7849093818104098
    // Node 79    -1.3684211305878056
    var node = [];
    node[51] = node_51(data)*(4.883683768593507);
    node[52] = node_52(data)*(-1.961635317790739);
    node[53] = node_53(data)*(-2.6634003221780485);
    node[54] = node_54(data)*(-0.5848270713742035);
    node[55] = node_55(data)*(-2.1697672801309413);
    node[56] = node_56(data)*(-3.4672499314091847);
    node[57] = node_57(data)*(-5.294892034029173);
    node[58] = node_58(data)*(-1.990422980032256);
    node[59] = node_59(data)*(-1.8366520853291743);
    node[60] = node_60(data)*(-5.022206062955449);
    node[61] = node_61(data)*(0.3237612000410025);
    node[62] = node_62(data)*(-0.4053328463722717);
    node[63] = node_63(data)*(-0.8387460542313333);
    node[64] = node_64(data)*(-0.44078566685590864);
    node[65] = node_65(data)*(-3.68690661539132);
    node[66] = node_66(data)*(-0.9749096754758357);
    node[67] = node_67(data)*(-5.659592021263462);
    node[68] = node_68(data)*(2.710775941435593);
    node[69] = node_69(data)*(-4.37893546584105);
    node[70] = node_70(data)*(-1.3723745363317654);
    node[71] = node_71(data)*(0.5232354213453188);
    node[72] = node_72(data)*(-6.087876120000325);
    node[73] = node_73(data)*(4.205156273801273);
    node[74] = node_74(data)*(-3.907413891293416);
    node[75] = node_75(data)*(-3.3193596284984936);
    node[76] = node_76(data)*(-1.9878485537631285);
    node[77] = node_77(data)*(-3.458232475106313);
    node[78] = node_78(data)*(-1.7849093818104098);
    node[79] = node_79(data)*(-1.3684211305878056);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_27(data){
    var Threshold  =  -17.688702318189936
    // Node 51    -5.810735017988761
    // Node 52    -2.0595072475195826
    // Node 53    12.76514938438096
    // Node 54    -0.5739523971675663
    // Node 55    -7.456181502634242
    // Node 56    -3.8566412571630955
    // Node 57    -18.462478795233995
    // Node 58    4.611720657935968
    // Node 59    -7.290649177909987
    // Node 60    -0.5582192698494393
    // Node 61    16.107480020022884
    // Node 62    -1.9118529624261429
    // Node 63    -21.005037515173033
    // Node 64    -0.7098983664156815
    // Node 65    -20.967528966305835
    // Node 66    -13.431350866664424
    // Node 67    16.629775782392436
    // Node 68    3.4791935842438764
    // Node 69    -1.3005645660145435
    // Node 70    -3.052005121523694
    // Node 71    9.434345977816905
    // Node 72    10.019937594975353
    // Node 73    6.455938387101224
    // Node 74    -8.252482043205118
    // Node 75    1.7522624884796552
    // Node 76    8.053388933018335
    // Node 77    -3.155256857917239
    // Node 78    -11.668088402357869
    // Node 79    -2.0158890485908603
    var node = [];
    node[51] = node_51(data)*(-5.810735017988761);
    node[52] = node_52(data)*(-2.0595072475195826);
    node[53] = node_53(data)*(12.76514938438096);
    node[54] = node_54(data)*(-0.5739523971675663);
    node[55] = node_55(data)*(-7.456181502634242);
    node[56] = node_56(data)*(-3.8566412571630955);
    node[57] = node_57(data)*(-18.462478795233995);
    node[58] = node_58(data)*(4.611720657935968);
    node[59] = node_59(data)*(-7.290649177909987);
    node[60] = node_60(data)*(-0.5582192698494393);
    node[61] = node_61(data)*(16.107480020022884);
    node[62] = node_62(data)*(-1.9118529624261429);
    node[63] = node_63(data)*(-21.005037515173033);
    node[64] = node_64(data)*(-0.7098983664156815);
    node[65] = node_65(data)*(-20.967528966305835);
    node[66] = node_66(data)*(-13.431350866664424);
    node[67] = node_67(data)*(16.629775782392436);
    node[68] = node_68(data)*(3.4791935842438764);
    node[69] = node_69(data)*(-1.3005645660145435);
    node[70] = node_70(data)*(-3.052005121523694);
    node[71] = node_71(data)*(9.434345977816905);
    node[72] = node_72(data)*(10.019937594975353);
    node[73] = node_73(data)*(6.455938387101224);
    node[74] = node_74(data)*(-8.252482043205118);
    node[75] = node_75(data)*(1.7522624884796552);
    node[76] = node_76(data)*(8.053388933018335);
    node[77] = node_77(data)*(-3.155256857917239);
    node[78] = node_78(data)*(-11.668088402357869);
    node[79] = node_79(data)*(-2.0158890485908603);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_28(data){
    var Threshold  =  -12.286541047782698
    // Node 51    -8.996580808343825
    // Node 52    -9.991751009212223
    // Node 53    1.9654178570142988
    // Node 54    -0.6621801054613529
    // Node 55    5.632369241985754
    // Node 56    -11.778161088364342
    // Node 57    -10.293540583200162
    // Node 58    6.056563043787587
    // Node 59    6.030564027507503
    // Node 60    -4.485448347117121
    // Node 61    21.834272140564785
    // Node 62    -1.5545692583131896
    // Node 63    13.004697387756984
    // Node 64    -0.5034404247603412
    // Node 65    -3.095149373873849
    // Node 66    -1.7357668667486466
    // Node 67    -3.593248368684495
    // Node 68    0.7228660103489701
    // Node 69    -15.651291804149654
    // Node 70    -1.0477395839169537
    // Node 71    -12.977398568897573
    // Node 72    -11.34840624472061
    // Node 73    -3.5949600596743956
    // Node 74    -9.331778336713029
    // Node 75    11.467172548825339
    // Node 76    5.395254080689141
    // Node 77    1.6436573553901241
    // Node 78    -10.185650889254035
    // Node 79    -5.318182637908424
    var node = [];
    node[51] = node_51(data)*(-8.996580808343825);
    node[52] = node_52(data)*(-9.991751009212223);
    node[53] = node_53(data)*(1.9654178570142988);
    node[54] = node_54(data)*(-0.6621801054613529);
    node[55] = node_55(data)*(5.632369241985754);
    node[56] = node_56(data)*(-11.778161088364342);
    node[57] = node_57(data)*(-10.293540583200162);
    node[58] = node_58(data)*(6.056563043787587);
    node[59] = node_59(data)*(6.030564027507503);
    node[60] = node_60(data)*(-4.485448347117121);
    node[61] = node_61(data)*(21.834272140564785);
    node[62] = node_62(data)*(-1.5545692583131896);
    node[63] = node_63(data)*(13.004697387756984);
    node[64] = node_64(data)*(-0.5034404247603412);
    node[65] = node_65(data)*(-3.095149373873849);
    node[66] = node_66(data)*(-1.7357668667486466);
    node[67] = node_67(data)*(-3.593248368684495);
    node[68] = node_68(data)*(0.7228660103489701);
    node[69] = node_69(data)*(-15.651291804149654);
    node[70] = node_70(data)*(-1.0477395839169537);
    node[71] = node_71(data)*(-12.977398568897573);
    node[72] = node_72(data)*(-11.34840624472061);
    node[73] = node_73(data)*(-3.5949600596743956);
    node[74] = node_74(data)*(-9.331778336713029);
    node[75] = node_75(data)*(11.467172548825339);
    node[76] = node_76(data)*(5.395254080689141);
    node[77] = node_77(data)*(1.6436573553901241);
    node[78] = node_78(data)*(-10.185650889254035);
    node[79] = node_79(data)*(-5.318182637908424);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_29(data){
    var Threshold =   -8.36678088431008
    // Node 51    -3.4347778100048307
    // Node 52    -1.3907443064481197
    // Node 53    -0.5599381519115659
    // Node 54    -0.5311987728595998
    // Node 55    -0.8983943148102002
    // Node 56    -1.066563023723748
    // Node 57    -17.50091648858445
    // Node 58    8.570129145870968
    // Node 59    -0.6422410116884579
    // Node 60    -5.9452104447218295
    // Node 61    -1.1437807641334286
    // Node 62    -5.795793693623233
    // Node 63    -15.181728716548102
    // Node 64    -0.394939986044331
    // Node 65    -1.502206380512577
    // Node 66    -6.614859731217025
    // Node 67    2.607333490670069
    // Node 68    1.8152573014151667
    // Node 69    -0.7101129885552353
    // Node 70    -0.687410658726831
    // Node 71    -2.00581501464404
    // Node 72    23.166568890966317
    // Node 73    -9.621136336281392
    // Node 74    -2.981284636789192
    // Node 75    -8.321824126964655
    // Node 76    -2.3480330951435118
    // Node 77    -2.57293628223728
    // Node 78    -0.5443737714863583
    // Node 79    -1.1855835247311208
    var node = [];
    node[51] = node_51(data)*(-3.4347778100048307);
    node[52] = node_52(data)*(-1.3907443064481197);
    node[53] = node_53(data)*(-0.5599381519115659);
    node[54] = node_54(data)*(-0.5311987728595998);
    node[55] = node_55(data)*(-0.8983943148102002);
    node[56] = node_56(data)*(-1.066563023723748);
    node[57] = node_57(data)*(-17.50091648858445);
    node[58] = node_58(data)*(8.570129145870968);
    node[59] = node_59(data)*(-0.6422410116884579);
    node[60] = node_60(data)*(-5.9452104447218295);
    node[61] = node_61(data)*(-1.1437807641334286);
    node[62] = node_62(data)*(-5.795793693623233);
    node[63] = node_63(data)*(-15.181728716548102);
    node[64] = node_64(data)*(-0.394939986044331);
    node[65] = node_65(data)*(-1.502206380512577);
    node[66] = node_66(data)*(-6.614859731217025);
    node[67] = node_67(data)*(2.607333490670069);
    node[68] = node_68(data)*(1.8152573014151667);
    node[69] = node_69(data)*(-0.7101129885552353);
    node[70] = node_70(data)*(-0.687410658726831);
    node[71] = node_71(data)*(-2.00581501464404);
    node[72] = node_72(data)*(23.166568890966317);
    node[73] = node_73(data)*(-9.621136336281392);
    node[74] = node_74(data)*(-2.981284636789192);
    node[75] = node_75(data)*(-8.321824126964655);
    node[76] = node_76(data)*(-2.3480330951435118);
    node[77] = node_77(data)*(-2.57293628223728);
    node[78] = node_78(data)*(-0.5443737714863583);
    node[79] = node_79(data)*(-1.1855835247311208);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_30(data){
    var Threshold  =  -4.6585595142033
    // Node 51    -2.8474675138824237
    // Node 52    3.345523025662432
    // Node 53    -0.5437870046468122
    // Node 54    -1.3181169633922127
    // Node 55    -0.5357225241890406
    // Node 56    0.3437681098733651
    // Node 57    0.49036973131830214
    // Node 58    5.8601309570602185
    // Node 59    -2.7864814093508463
    // Node 60    -7.099960360638633
    // Node 61    -5.8235082475280215
    // Node 62    -0.9048220167512661
    // Node 63    -1.0752693998572436
    // Node 64    -0.7804651101759339
    // Node 65    0.713660459651142
    // Node 66    -9.750142265932006
    // Node 67    -5.10345155596402
    // Node 68    -1.5276885601801762
    // Node 69    -0.5735309934521144
    // Node 70    -0.7531408202217539
    // Node 71    -2.535905443504994
    // Node 72    6.521537202884526
    // Node 73    -4.564504959020461
    // Node 74    -0.6491433451493799
    // Node 75    -2.011384284701793
    // Node 76    -5.8353195619226
    // Node 77    -3.50465523966699
    // Node 78    -0.508744172038715
    // Node 79    -7.748101872324539
    var node = [];
    node[51] = node_51(data)*(-2.8474675138824237);
    node[52] = node_52(data)*(3.345523025662432);
    node[53] = node_53(data)*(-0.5437870046468122);
    node[54] = node_54(data)*(-1.3181169633922127);
    node[55] = node_55(data)*(-0.5357225241890406);
    node[56] = node_56(data)*(0.3437681098733651);
    node[57] = node_57(data)*(0.49036973131830214);
    node[58] = node_58(data)*(5.8601309570602185);
    node[59] = node_59(data)*(-2.7864814093508463);
    node[60] = node_60(data)*(-7.099960360638633);
    node[61] = node_61(data)*(-5.8235082475280215);
    node[62] = node_62(data)*(-0.9048220167512661);
    node[63] = node_63(data)*(-1.0752693998572436);
    node[64] = node_64(data)*(-0.7804651101759339);
    node[65] = node_65(data)*(0.713660459651142);
    node[66] = node_66(data)*(-9.750142265932006);
    node[67] = node_67(data)*(-5.10345155596402);
    node[68] = node_68(data)*(-1.5276885601801762);
    node[69] = node_69(data)*(-0.5735309934521144);
    node[70] = node_70(data)*(-0.7531408202217539);
    node[71] = node_71(data)*(-2.535905443504994);
    node[72] = node_72(data)*(6.521537202884526);
    node[73] = node_73(data)*(-4.564504959020461);
    node[74] = node_74(data)*(-0.6491433451493799);
    node[75] = node_75(data)*(-2.011384284701793);
    node[76] = node_76(data)*(-5.8353195619226);
    node[77] = node_77(data)*(-3.50465523966699);
    node[78] = node_78(data)*(-0.508744172038715);
    node[79] = node_79(data)*(-7.748101872324539);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_31(data){
    var Threshold  =  -10.25941639862303
    // Node 51    5.642504998865136
    // Node 52    10.471942012535791
    // Node 53    -18.107689674037488
    // Node 54    -18.26518019409075
    // Node 55    -13.539558228621315
    // Node 56    2.8409276893281787
    // Node 57    -2.3858234588575806
    // Node 58    -3.7035638205068233
    // Node 59    -2.6443786860909517
    // Node 60    20.90831548516619
    // Node 61    -20.086690553648975
    // Node 62    -1.4279062533444697
    // Node 63    22.423229691677886
    // Node 64    -23.624954747807042
    // Node 65    0.04810058870908784
    // Node 66    -27.93493608938206
    // Node 67    9.890315362644426
    // Node 68    -3.41075807329042
    // Node 69    15.33857289853922
    // Node 70    -6.001531050475789
    // Node 71    23.86129617377277
    // Node 72    -6.268607920320401
    // Node 73    -4.5610512865740995
    // Node 74    1.5719343904081868
    // Node 75    -5.656200558807504
    // Node 76    11.365057639236312
    // Node 77    -15.938618063835122
    // Node 78    6.272601580907456
    // Node 79    31.39686466518148
    var node = [];
    node[51] = node_51(data)*(5.642504998865136);
    node[52] = node_52(data)*(10.471942012535791);
    node[53] = node_53(data)*(-18.107689674037488);
    node[54] = node_54(data)*(-18.26518019409075);
    node[55] = node_55(data)*(-13.539558228621315);
    node[56] = node_56(data)*(2.8409276893281787);
    node[57] = node_57(data)*(-2.3858234588575806);
    node[58] = node_58(data)*(-3.7035638205068233);
    node[59] = node_59(data)*(-2.6443786860909517);
    node[60] = node_60(data)*(20.90831548516619);
    node[61] = node_61(data)*(-20.086690553648975);
    node[62] = node_62(data)*(-1.4279062533444697);
    node[63] = node_63(data)*(22.423229691677886);
    node[64] = node_64(data)*(-23.624954747807042);
    node[65] = node_65(data)*(0.04810058870908784);
    node[66] = node_66(data)*(-27.93493608938206);
    node[67] = node_67(data)*(9.890315362644426);
    node[68] = node_68(data)*(-3.41075807329042);
    node[69] = node_69(data)*(15.33857289853922);
    node[70] = node_70(data)*(-6.001531050475789);
    node[71] = node_71(data)*(23.86129617377277);
    node[72] = node_72(data)*(-6.268607920320401);
    node[73] = node_73(data)*(-4.5610512865740995);
    node[74] = node_74(data)*(1.5719343904081868);
    node[75] = node_75(data)*(-5.656200558807504);
    node[76] = node_76(data)*(11.365057639236312);
    node[77] = node_77(data)*(-15.938618063835122);
    node[78] = node_78(data)*(6.272601580907456);
    node[79] = node_79(data)*(31.39686466518148);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }
        
}

function node_32(data){
    var Threshold  =  -7.563777285861271
    // Node 51    -6.898196579495384
    // Node 52    -0.9565481841583123
    // Node 53    -3.855367465680321
    // Node 54    -0.49136563779568726
    // Node 55    -0.6939866108190177
    // Node 56    -0.9521738605576926
    // Node 57    -1.651779442787175
    // Node 58    -1.5085307417561962
    // Node 59    -0.6425098546230814
    // Node 60    -11.164865303937216
    // Node 61    18.534779833345425
    // Node 62    -1.5490897852829166
    // Node 63    -2.922080448128956
    // Node 64    -0.4621287693354881
    // Node 65    -3.274388927043481
    // Node 66    -6.47357756398986
    // Node 67    2.6993965872137613
    // Node 68    1.3480245014402308
    // Node 69    -12.206173966531722
    // Node 70    -0.6917447275790207
    // Node 71    -5.448331236360015
    // Node 72    -12.899465320945886
    // Node 73    -2.26701515806894
    // Node 74    15.415544349648739
    // Node 75    1.3015751191007283
    // Node 76    -5.41821993938165
    // Node 77    1.868012854941736
    // Node 78    -0.894010772617014
    // Node 79    -1.0619833927365558
    var node = [];
    node[51] = node_51(data)*(-6.898196579495384);
    node[52] = node_52(data)*(-0.9565481841583123);
    node[53] = node_53(data)*(-3.855367465680321);
    node[54] = node_54(data)*(-0.49136563779568726);
    node[55] = node_55(data)*(-0.6939866108190177);
    node[56] = node_56(data)*(-0.9521738605576926);
    node[57] = node_57(data)*(-1.651779442787175);
    node[58] = node_58(data)*(-1.5085307417561962);
    node[59] = node_59(data)*(-0.6425098546230814);
    node[60] = node_60(data)*(-11.164865303937216);
    node[61] = node_61(data)*(18.534779833345425);
    node[62] = node_62(data)*(-1.5490897852829166);
    node[63] = node_63(data)*(-2.922080448128956);
    node[64] = node_64(data)*(-0.4621287693354881);
    node[65] = node_65(data)*(-3.274388927043481);
    node[66] = node_66(data)*(-6.47357756398986);
    node[67] = node_67(data)*(2.6993965872137613);
    node[68] = node_68(data)*(1.3480245014402308);
    node[69] = node_69(data)*(-12.206173966531722);
    node[70] = node_70(data)*(-0.6917447275790207);
    node[71] = node_71(data)*(-5.448331236360015);
    node[72] = node_72(data)*(-12.899465320945886);
    node[73] = node_73(data)*(-2.26701515806894);
    node[74] = node_74(data)*(15.415544349648739);
    node[75] = node_75(data)*(1.3015751191007283);
    node[76] = node_76(data)*(-5.41821993938165);
    node[77] = node_77(data)*(1.868012854941736);
    node[78] = node_78(data)*(-0.894010772617014);
    node[79] = node_79(data)*(-1.0619833927365558);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_33(data){
    var Threshold  =  -3.258523298741653
    // Node 51    0.04846547363791143
    // Node 52    -2.5111250298917653
    // Node 53    4.032275083318168
    // Node 54    -0.7838537492455566
    // Node 55    1.1487867978140427
    // Node 56    -0.030241723265164725
    // Node 57    -0.45235326181149577
    // Node 58    -1.2701870871465246
    // Node 59    -0.0649387869700919
    // Node 60    -2.228670628964136
    // Node 61    -0.95946923674008
    // Node 62    1.6059112576771593
    // Node 63    -1.410810194338062
    // Node 64    -0.4684660557267448
    // Node 65    -3.82539295404861
    // Node 66    -2.699167273282788
    // Node 67    -1.1201457409747924
    // Node 68    1.09436443007821
    // Node 69    -0.6516322473342114
    // Node 70    4.130049453249884
    // Node 71    1.3741170578418487
    // Node 72    0.8556269590454082
    // Node 73    -1.0872333925100142
    // Node 74    -0.6977701470498003
    // Node 75    -0.7059483495721247
    // Node 76    -3.018194592290415
    // Node 77    0.3684452377364391
    // Node 78    0.40505972600945334
    // Node 79    -2.7542086750418697
    var node = [];
    node[51] = node_51(data)*(0.04846547363791143);
    node[52] = node_52(data)*(-2.5111250298917653);
    node[53] = node_53(data)*(4.032275083318168);
    node[54] = node_54(data)*(-0.7838537492455566);
    node[55] = node_55(data)*(1.1487867978140427);
    node[56] = node_56(data)*(-0.030241723265164725);
    node[57] = node_57(data)*(-0.45235326181149577);
    node[58] = node_58(data)*(-1.2701870871465246);
    node[59] = node_59(data)*(-0.0649387869700919);
    node[60] = node_60(data)*(-2.228670628964136);
    node[61] = node_61(data)*(-0.95946923674008);
    node[62] = node_62(data)*(1.6059112576771593);
    node[63] = node_63(data)*(-1.410810194338062);
    node[64] = node_64(data)*(-0.4684660557267448);
    node[65] = node_65(data)*(-3.82539295404861);
    node[66] = node_66(data)*(-2.699167273282788);
    node[67] = node_67(data)*(-1.1201457409747924);
    node[68] = node_68(data)*(1.09436443007821);
    node[69] = node_69(data)*(-0.6516322473342114);
    node[70] = node_70(data)*( 4.130049453249884);
    node[71] = node_71(data)*(1.3741170578418487);
    node[72] = node_72(data)*(0.8556269590454082);
    node[73] = node_73(data)*(-1.0872333925100142);
    node[74] = node_74(data)*(-0.6977701470498003);
    node[75] = node_75(data)* (-0.7059483495721247);
    node[76] = node_76(data)*(-3.018194592290415);
    node[77] = node_77(data)*(0.3684452377364391);
    node[78] = node_78(data)*(0.40505972600945334);
    node[79] = node_79(data)*(-2.7542086750418697);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_34(data){
    var Threshold  =  -9.689679274619184
    // Node 51    -8.546931995934344
    // Node 52    -0.8075093759273266
    // Node 53    -6.811659339714502
    // Node 54    -0.5296895386236309
    // Node 55    -0.7395909575538039
    // Node 56    -1.0277003688146156
    // Node 57    -1.6240862179260815
    // Node 58    -2.2520781189906836
    // Node 59    -0.5983562095936181
    // Node 60    -6.600684983410088
    // Node 61    9.225550754656393
    // Node 62    -1.823690338914452
    // Node 63    -6.007220832191705
    // Node 64    -0.4235236903813747
    // Node 65    -4.370214775996386
    // Node 66    -8.73838208574577
    // Node 67    10.612925562476354
    // Node 68    0.0842991315945814
    // Node 69    16.22499149788368
    // Node 70    -0.6368904404368936
    // Node 71    -8.037825877364822
    // Node 72    -0.06490750701094979
    // Node 73    -0.7216301347264118
    // Node 74    2.535540444642788
    // Node 75    -2.844257870931758
    // Node 76    -4.4015029331929
    // Node 77    5.358220834398754
    // Node 78    -1.7218593636066
    // Node 79    -0.883401958485216
    var node = [];
    node[51] = node_51(data)*(-8.546931995934344);
    node[52] = node_52(data)*(-0.8075093759273266);
    node[53] = node_53(data)*(-6.811659339714502);
    node[54] = node_54(data)*(-0.5296895386236309);
    node[55] = node_55(data)*(-0.7395909575538039);
    node[56] = node_56(data)*(-1.0277003688146156);
    node[57] = node_57(data)*(-1.6240862179260815);
    node[58] = node_58(data)*(-2.2520781189906836);
    node[59] = node_59(data)*(-0.5983562095936181);
    node[60] = node_60(data)*(-6.600684983410088);
    node[61] = node_61(data)*(9.225550754656393);
    node[62] = node_62(data)*(-1.823690338914452);
    node[63] = node_63(data)*(-6.007220832191705);
    node[64] = node_64(data)*(-0.4235236903813747);
    node[65] = node_65(data)*(-4.370214775996386);
    node[66] = node_66(data)*(-8.73838208574577);
    node[67] = node_67(data)*(10.612925562476354);
    node[68] = node_68(data)*(0.0842991315945814);
    node[69] = node_69(data)*(16.22499149788368);
    node[70] = node_70(data)*(-0.6368904404368936);
    node[71] = node_71(data)*(-8.037825877364822);
    node[72] = node_72(data)*(-0.06490750701094979);
    node[73] = node_73(data)*(-0.7216301347264118);
    node[74] = node_74(data)*(2.535540444642788);
    node[75] = node_75(data)*(-2.844257870931758);
    node[76] = node_76(data)*(-4.4015029331929);
    node[77] = node_77(data)*(5.358220834398754);
    node[78] = node_78(data)*(-1.7218593636066);
    node[79] = node_79(data)*(-0.883401958485216);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_35(data){
    var Threshold  =  -6.988400819201567
    // Node 51    -2.5032215934078663
    // Node 52    -0.8344700303674467
    // Node 53    -2.4659409380117014
    // Node 54    -0.49713373774298036
    // Node 55    -0.7373759756405366
    // Node 56    -1.8307234902872382
    // Node 57    -4.255999360891679
    // Node 58    -3.702166709605428
    // Node 59    -0.5738515387530763
    // Node 60    -12.074787091766394
    // Node 61    6.20466671032266
    // Node 62    -1.5704159767515133
    // Node 63    -0.5995704587661843
    // Node 64    -0.44232725640634696
    // Node 65    5.777285633889564
    // Node 66    -3.191565602991896
    // Node 67    -0.001548747184834259
    // Node 68    -0.1245368597577696
    // Node 69    -7.770475333311878
    // Node 70    -0.8054128040872826
    // Node 71    -5.1070534747942045
    // Node 72    2.9607003006953927
    // Node 73    -8.727461083403986
    // Node 74    9.869672980324058
    // Node 75    -0.39803498680147287
    // Node 76    -3.2603582694763173
    // Node 77    3.9540767809352992
    // Node 78    -0.971430768032245
    // Node 79    -3.5047385184157185
    var node = [];
    node[51] = node_51(data)*(-2.5032215934078663);
    node[52] = node_52(data)*(-0.8344700303674467);
    node[53] = node_53(data)*(-2.4659409380117014);
    node[54] = node_54(data)*(-0.49713373774298036);
    node[55] = node_55(data)*(-0.7373759756405366);
    node[56] = node_56(data)*(-1.8307234902872382);
    node[57] = node_57(data)*(-4.255999360891679);
    node[58] = node_58(data)*(-3.702166709605428);
    node[59] = node_59(data)*(-0.5738515387530763);
    node[60] = node_60(data)*(-12.074787091766394);
    node[61] = node_61(data)*(6.20466671032266);
    node[62] = node_62(data)*(-1.5704159767515133);
    node[63] = node_63(data)*(-0.5995704587661843);
    node[64] = node_64(data)*(-0.44232725640634696);
    node[65] = node_65(data)*(5.777285633889564);
    node[66] = node_66(data)*(-3.191565602991896);
    node[67] = node_67(data)*(-0.001548747184834259);
    node[68] = node_68(data)*(-0.1245368597577696);
    node[69] = node_69(data)*(-7.770475333311878);
    node[70] = node_70(data)*(-0.8054128040872826);
    node[71] = node_71(data)*(-5.1070534747942045);
    node[72] = node_72(data)*(2.9607003006953927);
    node[73] = node_73(data)*(-8.727461083403986);
    node[74] = node_74(data)*(9.869672980324058);
    node[75] = node_75(data)*(-0.39803498680147287);
    node[76] = node_76(data)*(-3.2603582694763173);
    node[77] = node_77(data)*(3.9540767809352992);
    node[78] = node_78(data)*(-0.971430768032245);
    node[79] = node_79(data)*(-3.5047385184157185);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_36(data){
    var Threshold  =  -8.06137641585645
    // Node 51    -8.751570577350824
    // Node 52    -0.8799385360152668
    // Node 53    -1.0564748058213769
    // Node 54    -0.543708177456281
    // Node 55    -0.7422918836309015
    // Node 56    -1.6426141438824975
    // Node 57    -3.006256618568262
    // Node 58    -11.351915971430467
    // Node 59    -0.5609274030920498
    // Node 60    -8.965518193999099
    // Node 61    11.404612193645344
    // Node 62    -3.260832910778162
    // Node 63    1.5752664134193242
    // Node 64    -0.4083582478927507
    // Node 65    -6.928218862486522
    // Node 66    -4.781229720266008
    // Node 67    2.1412864237646874
    // Node 68    3.7089678141228326
    // Node 69    -25.64991424878319
    // Node 70    -0.7513051586768082
    // Node 71    -5.725916615412215
    // Node 72    10.441508093667832
    // Node 73    -15.445578331342599
    // Node 74    -9.546661301015078
    // Node 75    9.94372345602964
    // Node 76    -2.612346588975152
    // Node 77    -0.7251330394325469
    // Node 78    -0.7339675496600534
    // Node 79    -1.3476194747511763
    var node = [];
    node[51] = node_51(data)*(-8.751570577350824);
    node[52] = node_52(data)*(-0.8799385360152668);
    node[53] = node_53(data)*(-1.0564748058213769);
    node[54] = node_54(data)*(-0.543708177456281);
    node[55] = node_55(data)*(-0.7422918836309015);
    node[56] = node_56(data)*(-1.6426141438824975);
    node[57] = node_57(data)*(-3.006256618568262);
    node[58] = node_58(data)*(-11.351915971430467);
    node[59] = node_59(data)*(-0.5609274030920498);
    node[60] = node_60(data)*(-8.965518193999099);
    node[61] = node_61(data)*(11.404612193645344);
    node[62] = node_62(data)*(-3.260832910778162);
    node[63] = node_63(data)*(1.5752664134193242);
    node[64] = node_64(data)*(-0.4083582478927507);
    node[65] = node_65(data)*(-6.928218862486522);
    node[66] = node_66(data)*(-4.781229720266008);
    node[67] = node_67(data)*(2.1412864237646874);
    node[68] = node_68(data)*(3.7089678141228326);
    node[69] = node_69(data)*(-25.64991424878319);
    node[70] = node_70(data)*(-0.7513051586768082);
    node[71] = node_71(data)*(-5.725916615412215);
    node[72] = node_72(data)*(10.441508093667832);
    node[73] = node_73(data)*(-15.445578331342599);
    node[74] = node_74(data)*(-9.546661301015078);
    node[75] = node_75(data)*(9.94372345602964);
    node[76] = node_76(data)*(-2.612346588975152);
    node[77] = node_77(data)*(-0.7251330394325469);
    node[78] = node_78(data)*(-0.7339675496600534);
    node[79] = node_79(data)*(-1.3476194747511763);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_37(data){
    var Threshold  =  -2.413332278610049
    // Node 51    -0.7995271174081314
    // Node 52    -6.754689624810438
    // Node 53    1.0493632461451985
    // Node 54    -1.5353711363120714
    // Node 55    -4.326694244021152
    // Node 56    1.9092535769961398
    // Node 57    -7.115278877918738
    // Node 58    -0.6538467984693104
    // Node 59    -2.0696891504472004
    // Node 60    -6.507762897209979
    // Node 61    3.156573545844756
    // Node 62    -0.5040926205646533
    // Node 63    -3.018219797677891
    // Node 64    -1.2472049285700268
    // Node 65    -0.003482846573314761
    // Node 66    -4.964250569175419
    // Node 67    -1.2636413596797356
    // Node 68    -0.6418623092920531
    // Node 69    -1.2436106521470276
    // Node 70    1.1197507880699373
    // Node 71    -3.1911987689123307
    // Node 72    -0.6287464841624272
    // Node 73    -0.15214823438583372
    // Node 74    -0.5599243704061659
    // Node 75    2.3976928041357404
    // Node 76    -2.102837976046553
    // Node 77    -0.2768854129433442
    // Node 78    2.284008340313718
    // Node 79    3.242221820821158
    var node = [];
    node[51] = node_51(data)*(-0.7995271174081314);
    node[52] = node_52(data)*(-6.754689624810438);
    node[53] = node_53(data)*(1.0493632461451985);
    node[54] = node_54(data)*(-1.5353711363120714);
    node[55] = node_55(data)*(-4.326694244021152);
    node[56] = node_56(data)*(1.9092535769961398);
    node[57] = node_57(data)*(-7.115278877918738);
    node[58] = node_58(data)*(-0.6538467984693104);
    node[59] = node_59(data)*(-2.0696891504472004);
    node[60] = node_60(data)*(-6.507762897209979);
    node[61] = node_61(data)*(3.156573545844756);
    node[62] = node_62(data)*(-0.5040926205646533);
    node[63] = node_63(data)*(-3.018219797677891);
    node[64] = node_64(data)*(-1.2472049285700268);
    node[65] = node_65(data)*(-0.003482846573314761);
    node[66] = node_66(data)*(-4.964250569175419);
    node[67] = node_67(data)*(-1.2636413596797356);
    node[68] = node_68(data)*(-0.6418623092920531);
    node[69] = node_69(data)*(-1.2436106521470276);
    node[70] = node_70(data)*(1.1197507880699373);
    node[71] = node_71(data)*(-3.1911987689123307);
    node[72] = node_72(data)*(-0.6287464841624272);
    node[73] = node_73(data)*(-0.15214823438583372);
    node[74] = node_74(data)*(-0.5599243704061659);
    node[75] = node_75(data)*(2.3976928041357404);
    node[76] = node_76(data)*(-2.102837976046553);
    node[77] = node_77(data)*(-0.2768854129433442);
    node[78] = node_78(data)*(2.284008340313718);
    node[79] = node_79(data)*(3.242221820821158);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_38(data){
   var Threshold   = -9.092714851201144
    // Node 51    -8.618328184820896
    // Node 52    -4.210971755257652
    // Node 53    -0.5855456454638137
    // Node 54    -0.6180880021751174
    // Node 55    -7.034482761694214
    // Node 56    2.758378516021816
    // Node 57    -1.043912792274236
    // Node 58    7.245942099393991
    // Node 59    -3.296320885831636
    // Node 60    1.6569173895396432
    // Node 61    -16.621285893497657
    // Node 62    0.787733891443946
    // Node 63    -0.9992414138002301
    // Node 64    -0.42170879985138915
    // Node 65    11.901681820976922
    // Node 66    -3.697730410755025
    // Node 67    -9.350323659035157
    // Node 68    -0.730963979674454
    // Node 69    -0.5946895947077433
    // Node 70    -0.674656474100349
    // Node 71    -10.994085943487558
    // Node 72    -15.42929706424654
    // Node 73    9.765868736014417
    // Node 74    -0.6551017333109914
    // Node 75    -3.5229758233124144
    // Node 76    -11.545224931220645
    // Node 77    -5.878659207479322
    // Node 78    -0.5095543507522012
    // Node 79    -2.157132591294702
    var node = [];
    node[51] = node_51(data)*(-8.618328184820896);
    node[52] = node_52(data)*(-4.210971755257652);
    node[53] = node_53(data)*(-0.5855456454638137);
    node[54] = node_54(data)*(-0.6180880021751174);
    node[55] = node_55(data)*(-7.034482761694214);
    node[56] = node_56(data)*(2.758378516021816);
    node[57] = node_57(data)*(-1.043912792274236);
    node[58] = node_58(data)*(7.245942099393991);
    node[59] = node_59(data)*(-3.296320885831636);
    node[60] = node_60(data)*(1.6569173895396432);
    node[61] = node_61(data)*(-16.621285893497657);
    node[62] = node_62(data)*(0.787733891443946);
    node[63] = node_63(data)*(-0.9992414138002301);
    node[64] = node_64(data)*(-0.42170879985138915);
    node[65] = node_65(data)*(11.901681820976922);
    node[66] = node_66(data)*(-3.697730410755025);
    node[67] = node_67(data)*(-9.350323659035157);
    node[68] = node_68(data)*(-0.730963979674454);
    node[69] = node_69(data)*(-0.5946895947077433);
    node[70] = node_70(data)*(-0.674656474100349);
    node[71] = node_71(data)*(-10.994085943487558);
    node[72] = node_72(data)*(-15.42929706424654);
    node[73] = node_73(data)*(9.765868736014417);
    node[74] = node_74(data)*(-0.6551017333109914);
    node[75] = node_75(data)*(-3.5229758233124144);
    node[76] = node_76(data)*(-11.545224931220645);
    node[77] = node_77(data)*(-5.878659207479322);
    node[78] = node_78(data)*(-0.5095543507522012);
    node[79] = node_79(data)*(-2.157132591294702);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_39(data){
    var Threshold  =  -2.2408589345495136
    // Node 51    -1.9081791075136136
    // Node 52    -2.4929583173667673
    // Node 53    -1.0608024255912587
    // Node 54    -0.47398963548422846
    // Node 55    -0.6904968923398972
    // Node 56    -2.1855965220857665
    // Node 57    -7.400780060983947
    // Node 58    -3.8340224756171164
    // Node 59    -0.9205544262507498
    // Node 60    -1.9766742616346757
    // Node 61    4.457634100928997
    // Node 62    0.10183362186949844
    // Node 63    -9.171524857606475
    // Node 64    -0.41231265091998465
    // Node 65    -3.6824270242420565
    // Node 66    -0.15044387384686084
    // Node 67    -8.644129368915861
    // Node 68    -2.61802550753009
    // Node 69    -1.0052944245635467
    // Node 70    -0.9389968179808595
    // Node 71    1.8976557945506378
    // Node 72    -5.631974565730139
    // Node 73    4.619775120093522
    // Node 74    -1.9448412716206827
    // Node 75    -4.206507921814006
    // Node 76    -8.798282260549788
    // Node 77    2.786030625784991
    // Node 78    -0.6774052045082101
    // Node 79    -1.2978418524834214
    var node = [];
    node[51] = node_51(data)*(-1.9081791075136136);
    node[52] = node_52(data)*(-2.4929583173667673);
    node[53] = node_53(data)*(-1.0608024255912587);
    node[54] = node_54(data)*(-0.47398963548422846);
    node[55] = node_55(data)*(-0.6904968923398972);
    node[56] = node_56(data)*(-2.1855965220857665);
    node[57] = node_57(data)*(-7.400780060983947);
    node[58] = node_58(data)*(-3.8340224756171164);
    node[59] = node_59(data)*(-0.9205544262507498);
    node[60] = node_60(data)*(-1.9766742616346757);
    node[61] = node_61(data)*(4.457634100928997);
    node[62] = node_62(data)*(0.10183362186949844);
    node[63] = node_63(data)*(-9.171524857606475);
    node[64] = node_64(data)*(-0.41231265091998465);
    node[65] = node_65(data)*(-3.6824270242420565);
    node[66] = node_66(data)*(-0.15044387384686084);
    node[67] = node_67(data)*(-8.644129368915861);
    node[68] = node_68(data)*(-2.61802550753009);
    node[69] = node_69(data)*(-1.0052944245635467);
    node[70] = node_70(data)*(-0.9389968179808595);
    node[71] = node_71(data)*(1.8976557945506378);
    node[72] = node_72(data)*(-5.631974565730139);
    node[73] = node_73(data)*(4.619775120093522);
    node[74] = node_74(data)*(-1.9448412716206827);
    node[75] = node_75(data)*(-4.206507921814006);
    node[76] = node_76(data)*(-8.798282260549788);
    node[77] = node_77(data)*(2.786030625784991);
    node[78] = node_78(data)*(-0.6774052045082101);
    node[79] = node_79(data)*(-1.2978418524834214);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_40(data){
    var Threshold =   -5.744380025610284
    // Node 51    -3.252821727920881
    // Node 52    -1.1602759702659349
    // Node 53    -1.5737575701150774
    // Node 54    -0.5421429375323776
    // Node 55    -0.730964171010741
    // Node 56    -2.3187199270511707
    // Node 57    -3.0755987220372236
    // Node 58    -1.8868382377719728
    // Node 59    -0.9292155245902131
    // Node 60    -4.510047778496724
    // Node 61    -1.9781201382073574
    // Node 62    -1.4140894325689908
    // Node 63    8.682657247785784
    // Node 64    -0.42532225907340143
    // Node 65    -12.787516928594476
    // Node 66    -4.022423377604428
    // Node 67    4.160730330647232
    // Node 68    -4.56303569140028
    // Node 69    -4.460682982590153
    // Node 70    -0.8196961626018374
    // Node 71    1.5709660229465954
    // Node 72    -5.020499473444916
    // Node 73    6.7973179281168745
    // Node 74    -19.52213559323589
    // Node 75    -6.436348865802922
    // Node 76    -6.7314560877545695
    // Node 77    3.520143854679089
    // Node 78    -0.7504655688119638
    // Node 79    -1.1062233633286616
    var node = [];
    node[51] = node_51(data)*(-3.252821727920881);
    node[52] = node_52(data)*(-1.1602759702659349);
    node[53] = node_53(data)*(-1.5737575701150774);
    node[54] = node_54(data)*(-0.5421429375323776);
    node[55] = node_55(data)*(-0.730964171010741);
    node[56] = node_56(data)*(-2.3187199270511707);
    node[57] = node_57(data)*(-3.0755987220372236);
    node[58] = node_58(data)*(-1.8868382377719728);
    node[59] = node_59(data)*(-0.9292155245902131);
    node[60] = node_60(data)*(-4.510047778496724);
    node[61] = node_61(data)*(-1.9781201382073574);
    node[62] = node_62(data)*(-1.4140894325689908);
    node[63] = node_63(data)*(8.682657247785784);
    node[64] = node_64(data)*(-0.42532225907340143);
    node[65] = node_65(data)*(-12.787516928594476);
    node[66] = node_66(data)*(-4.022423377604428);
    node[67] = node_67(data)*(4.160730330647232);
    node[68] = node_68(data)*(-4.56303569140028);
    node[69] = node_69(data)*(-4.460682982590153);
    node[70] = node_70(data)*(-0.8196961626018374);
    node[71] = node_71(data)*(1.5709660229465954);
    node[72] = node_72(data)*(-5.020499473444916);
    node[73] = node_73(data)*(6.7973179281168745);
    node[74] = node_74(data)*(-19.52213559323589);
    node[75] = node_75(data)*(-6.436348865802922);
    node[76] = node_76(data)*(-6.7314560877545695);
    node[77] = node_77(data)*(3.520143854679089);
    node[78] = node_78(data)*(-0.7504655688119638);
    node[79] = node_79(data)*(-1.1062233633286616);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_41(data){
    var Threshold  =  -8.782117690320423
    // Node 51    -5.216760065633812
    // Node 52    -2.635669912211412
    // Node 53    -1.5803458868537734
    // Node 54    -0.6994545494472653
    // Node 55    -1.436371577376516
    // Node 56    -2.82811439947922
    // Node 57    -2.5718335833738375
    // Node 58    5.259548569413467
    // Node 59    -0.69254059064595
    // Node 60    -14.334323936154112
    // Node 61    3.3099498367453317
    // Node 62    -4.07556143214518
    // Node 63    -0.6801252530735029
    // Node 64    -0.49805755009599095
    // Node 65    12.831632473964937
    // Node 66    -4.389827045068392
    // Node 67    -2.1426776608009352
    // Node 68    -1.0134009435334352
    // Node 69    -6.862297298845991
    // Node 70    -1.4123401398594417
    // Node 71    -4.775143712895738
    // Node 72    -1.573181521182072
    // Node 73    -13.676858964323525
    // Node 74    -1.564880346990083
    // Node 75    9.655918764378786
    // Node 76    -1.1934509499025345
    // Node 77    -5.901130917011112
    // Node 78    -1.2356645274623625
    // Node 79    -3.536077993874357
    var node = [];
    node[51] = node_51(data)*(-5.216760065633812);
    node[52] = node_52(data)*(-2.635669912211412);
    node[53] = node_53(data)*(-1.5803458868537734);
    node[54] = node_54(data)*(-0.6994545494472653);
    node[55] = node_55(data)*(-1.436371577376516);
    node[56] = node_56(data)*(-2.82811439947922);
    node[57] = node_57(data)*(-2.5718335833738375);
    node[58] = node_58(data)*(5.259548569413467);
    node[59] = node_59(data)*(-0.69254059064595);
    node[60] = node_60(data)*(-14.334323936154112);
    node[61] = node_61(data)*(3.3099498367453317);
    node[62] = node_62(data)*(-4.07556143214518);
    node[63] = node_63(data)*(-0.6801252530735029);
    node[64] = node_64(data)*(-0.49805755009599095);
    node[65] = node_65(data)*(12.831632473964937);
    node[66] = node_66(data)*(-4.389827045068392);
    node[67] = node_67(data)*(-2.1426776608009352);
    node[68] = node_68(data)*(-1.0134009435334352);
    node[69] = node_69(data)*(-6.862297298845991);
    node[70] = node_70(data)*(-1.4123401398594417);
    node[71] = node_71(data)*(-4.775143712895738);
    node[72] = node_72(data)*(-1.573181521182072);
    node[73] = node_73(data)*(-13.676858964323525);
    node[74] = node_74(data)*(-1.564880346990083);
    node[75] = node_75(data)*(9.655918764378786);
    node[76] = node_76(data)*(-1.1934509499025345);
    node[77] = node_77(data)*(-5.901130917011112);
    node[78] = node_78(data)*(-1.2356645274623625);
    node[79] = node_79(data)*(-3.536077993874357);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_42(data){
    var Threshold   = -6.262735118157344
    // Node 51    3.531267601501764
    // Node 52    4.818364044895871
    // Node 53    -0.15786079051246885
    // Node 54    -1.2469099121844072
    // Node 55    -4.815285947851344
    // Node 56    -2.5616655578066307
    // Node 57    7.709275326136736
    // Node 58    -1.1895645970718234
    // Node 59    -0.21932340273318704
    // Node 60    -2.6002149340895375
    // Node 61    -0.8484247527216721
    // Node 62    -3.2234151231798855
    // Node 63    -1.809883933434564
    // Node 64    -0.6612730435829347
    // Node 65    -2.5065052029911006
    // Node 66    -2.832446902306611
    // Node 67    -0.9450938010923383
    // Node 68    2.544670647000357
    // Node 69    -0.6281783772535998
    // Node 70    -0.48104717139723385
    // Node 71    -2.6381394377589262
    // Node 72    -2.995237822656782
    // Node 73    -0.3846001931926734
    // Node 74    -0.6177573422752559
    // Node 75    3.6165592054877815
    // Node 76    -3.3561165245387143
    // Node 77    -1.8733086486649524
    // Node 78    4.936927689296204
    // Node 79    -0.3102998248685349
    var node = [];
    node[51] = node_51(data)*(3.531267601501764);
    node[52] = node_52(data)*(4.818364044895871);
    node[53] = node_53(data)*(-0.15786079051246885);
    node[54] = node_54(data)*(-1.2469099121844072);
    node[55] = node_55(data)*(-4.815285947851344);
    node[56] = node_56(data)*(-2.5616655578066307);
    node[57] = node_57(data)*(7.709275326136736);
    node[58] = node_58(data)*(-1.1895645970718234);
    node[59] = node_59(data)*(-0.21932340273318704);
    node[60] = node_60(data)*(-2.6002149340895375);
    node[61] = node_61(data)*(-0.8484247527216721);
    node[62] = node_62(data)*(-3.2234151231798855);
    node[63] = node_63(data)*(-1.809883933434564);
    node[64] = node_64(data)*(-0.6612730435829347);
    node[65] = node_65(data)*(-2.5065052029911006);
    node[66] = node_66(data)*(-2.832446902306611);
    node[67] = node_67(data)*(-0.9450938010923383);
    node[68] = node_68(data)*(2.544670647000357);
    node[69] = node_69(data)*(-0.6281783772535998);
    node[70] = node_70(data)*(-0.48104717139723385);
    node[71] = node_71(data)*(-2.6381394377589262);
    node[72] = node_72(data)*(-2.995237822656782);
    node[73] = node_73(data)*(-0.3846001931926734);
    node[74] = node_74(data)*(-0.6177573422752559);
    node[75] = node_75(data)*(3.6165592054877815);
    node[76] = node_76(data)*(-3.3561165245387143);
    node[77] = node_77(data)*(-1.8733086486649524);
    node[78] = node_78(data)*(4.936927689296204);
    node[79] = node_79(data)*(-0.3102998248685349);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_43(data){
    var Threshold  =  -6.158999363154219
    // Node 51    -6.5132713690311554
    // Node 52    -1.056624635617329
    // Node 53    9.53519920547644
    // Node 54    -0.541542456615218
    // Node 55    -1.2485602748446376
    // Node 56    -9.050770576010875
    // Node 57    -8.630909571637549
    // Node 58    -5.421254641124004
    // Node 59    -1.2525414659391592
    // Node 60    -14.514114534882033
    // Node 61    10.835816499118211
    // Node 62    -3.820800950853839
    // Node 63    -7.294539850544106
    // Node 64    -0.46602156374896997
    // Node 65    4.109982482816317
    // Node 66    -1.5225831030034445
    // Node 67    -11.178508763847123
    // Node 68    -0.6270142014536646
    // Node 69    6.818266730500648
    // Node 70    -6.093079122430703
    // Node 71    -2.6865648451336015
    // Node 72    3.7303637660171014
    // Node 73    0.49821852056647176
    // Node 74    -3.4453279433508426
    // Node 75    1.1496565790270104
    // Node 76    -7.052650760145166
    // Node 77    4.9868976857045935
    // Node 78    -2.574528340201274
    // Node 79    -1.545513250716279
    var node = [];
    node[51] = node_51(data)*(-6.5132713690311554);
    node[52] = node_52(data)*(-1.056624635617329);
    node[53] = node_53(data)*(9.53519920547644);
    node[54] = node_54(data)*(-0.541542456615218);
    node[55] = node_55(data)*(-1.2485602748446376);
    node[56] = node_56(data)*(-9.050770576010875);
    node[57] = node_57(data)*(-8.630909571637549);
    node[58] = node_58(data)*(-5.421254641124004);
    node[59] = node_59(data)*(-1.2525414659391592);
    node[60] = node_60(data)*(-14.514114534882033);
    node[61] = node_61(data)*(10.835816499118211);
    node[62] = node_62(data)*(-3.82080095085383);
    node[63] = node_63(data)*(-7.294539850544106);
    node[64] = node_64(data)*(-0.46602156374896997);
    node[65] = node_65(data)*(4.109982482816317);
    node[66] = node_66(data)*(-1.5225831030034445);
    node[67] = node_67(data)*(-11.178508763847123);
    node[68] = node_68(data)*(-0.6270142014536646);
    node[69] = node_69(data)*(6.818266730500648);
    node[70] = node_70(data)*(-6.093079122430703);
    node[71] = node_71(data)*(-2.6865648451336015);
    node[72] = node_72(data)*(3.7303637660171014);
    node[73] = node_73(data)*(0.49821852056647176);
    node[74] = node_74(data)*(-3.4453279433508426);
    node[75] = node_75(data)*(1.1496565790270104);
    node[76] = node_76(data)*(-7.052650760145166);
    node[77] = node_77(data)*(4.9868976857045935);
    node[78] = node_78(data)*(-2.574528340201274);
    node[79] = node_79(data)*(-1.545513250716279);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}


function node_44(data){
    var Threshold  =  -3.8299735665492043
    // Node 51    -0.6974313499456798
    // Node 52    3.200930945739623
    // Node 53    -2.969795538432508
    // Node 54    -0.7321811796962692
    // Node 55    2.1519607556284304
    // Node 56    -2.6571721185669768
    // Node 57    -11.286478934628686
    // Node 58    -7.131854897653282
    // Node 59    -2.745773335568603
    // Node 60    1.389198469138092
    // Node 61    9.206221127858669
    // Node 62    -0.6122008224718457
    // Node 63    -2.717340081335367
    // Node 64    -0.45636839050930145
    // Node 65    -2.397223276564261
    // Node 66    -1.7402135898573534
    // Node 67    -7.365831817425062
    // Node 68    -5.055394050865949
    // Node 69    -1.2557360590228055
    // Node 70    -1.1408948477537655
    // Node 71    -3.886136311321191
    // Node 72    -2.618343497952324
    // Node 73    6.235964283257648
    // Node 74    -1.9668291193243892
    // Node 75    -3.2615696515393093
    // Node 76    1.3376234969387668
    // Node 77    -6.476120011252876
    // Node 78    -1.9208096083730872
    // Node 79    -1.7552529185078838
    var node = [];
    node[51] = node_51(data)*(-0.6974313499456798);
    node[52] = node_52(data)*(3.200930945739623);
    node[53] = node_53(data)*(-2.969795538432508);
    node[54] = node_54(data)*(-0.7321811796962692);
    node[55] = node_55(data)*(2.1519607556284304);
    node[56] = node_56(data)*(-2.6571721185669768);
    node[57] = node_57(data)*(-11.286478934628686);
    node[58] = node_58(data)*(-7.131854897653282);
    node[59] = node_59(data)*(-2.745773335568603);
    node[60] = node_60(data)*(1.389198469138092);
    node[61] = node_61(data)*(9.206221127858669);
    node[62] = node_62(data)*(-0.6122008224718457);
    node[63] = node_63(data)*(-2.717340081335367);
    node[64] = node_64(data)*(-0.45636839050930145);
    node[65] = node_65(data)*(-2.397223276564261);
    node[66] = node_66(data)*(-1.7402135898573534);
    node[67] = node_67(data)*(-7.365831817425062);
    node[68] = node_68(data)*(-5.055394050865949);
    node[69] = node_69(data)*(-1.2557360590228055);
    node[70] = node_70(data)*(-1.1408948477537655);
    node[71] = node_71(data)*(-3.886136311321191);
    node[72] = node_72(data)*(-2.618343497952324);
    node[73] = node_73(data)*(6.235964283257648);
    node[74] = node_74(data)*(-1.9668291193243892);
    node[75] = node_75(data)*(-3.2615696515393093);
    node[76] = node_76(data)*(1.3376234969387668);
    node[77] = node_77(data)*(-6.476120011252876);
    node[78] = node_78(data)*(-1.9208096083730872);
    node[79] = node_79(data)*(-1.7552529185078838);
    var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        } 
}

function node_45(data){
   var Threshold  =  -3.5498221877960088
    // Node 51    -3.86123736451484
    // Node 52    0.8206235965785325
    // Node 53    5.2112856762653275
    // Node 54    -1.8676826235398063
    // Node 55    -1.3274681513724669
    // Node 56    1.0534561885613423
    // Node 57    2.883626159163705
    // Node 58    -1.483845663986055
    // Node 59    -0.47009819028176825
    // Node 60    -10.923862478761642
    // Node 61    -4.767901176383549
    // Node 62    -4.075090090369686
    // Node 63    -1.2860019860281606
    // Node 64    -1.323464381278858
    // Node 65    -0.9424661701319065
    // Node 66    -2.2603397485913432
    // Node 67    -1.285022722921696
    // Node 68    -2.2471657513857584
    // Node 69    -0.6259202211783031
    // Node 70    3.1326346109546117
    // Node 71    -1.162516818196517
    // Node 72    -1.1715596835212911
    // Node 73    -4.097389572092526
    // Node 74    -0.6258640029768874
    // Node 75    0.3292774422075498
    // Node 76    0.7526565574970883
    // Node 77    -0.051403596323575676
    // Node 78    -9.32897917876535
    // Node 79    -0.49901416419961175
    var node = [];
    node[51] = node_51(data)*(-3.86123736451484);
    node[52] = node_52(data)*(0.8206235965785325);
    node[53] = node_53(data)*(5.2112856762653275);
    node[54] = node_54(data)*(-1.8676826235398063);
    node[55] = node_55(data)*(-1.3274681513724669);
    node[56] = node_56(data)*(1.0534561885613423);
    node[57] = node_57(data)*(2.883626159163705);
    node[58] = node_58(data)*(-1.483845663986055);
    node[59] = node_59(data)*(-0.47009819028176825);
    node[60] = node_60(data)*(-10.923862478761642);
    node[61] = node_61(data)*(-4.767901176383549);
    node[62] = node_62(data)*(-4.075090090369686);
    node[63] = node_63(data)*(-1.2860019860281606);
    node[64] = node_64(data)*(-1.323464381278858);
    node[65] = node_65(data)*(-0.9424661701319065);
    node[66] = node_66(data)*(-2.2603397485913432);
    node[67] = node_67(data)*(-1.285022722921696);
    node[68] = node_68(data)*(-2.2471657513857584);
    node[69] = node_69(data)*(-0.6259202211783031);
    node[70] = node_70(data)*(3.1326346109546117);
    node[71] = node_71(data)*(-1.162516818196517);
    node[72] = node_72(data)*(-1.1715596835212911);
    node[73] = node_73(data)*(-4.097389572092526);
    node[74] = node_74(data)*(-0.6258640029768874);
    node[75] = node_75(data)*(0.3292774422075498);
    node[76] = node_76(data)*(0.7526565574970883);
    node[77] = node_77(data)*(-0.051403596323575676);
    node[78] = node_78(data)*(-9.32897917876535);
    node[79] = node_79(data)*(-0.49901416419961175);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_46(data){
   var Threshold  =  -6.510090963199135
    // Node 51    -5.222056129881978
    // Node 52    -0.8917037760495565
    // Node 53    -1.1014241382052021
    // Node 54    -0.5268804046279002
    // Node 55    -0.6913493874321364
    // Node 56    -0.7455620304464766
    // Node 57    -1.5991197224661218
    // Node 58    -13.138776638566654
    // Node 59    -0.5579614551504839
    // Node 60    -6.344990635240148
    // Node 61    13.409820649322775
    // Node 62    -2.8772132192799975
    // Node 63    -1.8124448592094815
    // Node 64    -0.42337990813201076
    // Node 65    -3.300103528463256
    // Node 66    -5.520147303379462
    // Node 67    -0.5539604342050876
    // Node 68    -2.3563470894175405
    // Node 69    -12.02419989552826
    // Node 70    -0.6130816983970719
    // Node 71    -4.587639440416428
    // Node 72    2.850926520114336
    // Node 73    -0.7807634226238899
    // Node 74    15.168210938116514
    // Node 75    4.072138700295583
    // Node 76    -1.7194309547783215
    // Node 77    -8.522669327558422
    // Node 78    -0.5738623631995036
    // Node 79    -0.9529472275793816
    var node = [];
    node[51] = node_51(data)*(-5.222056129881978);
    node[52] = node_52(data)*(-0.8917037760495565);
    node[53] = node_53(data)*(-1.1014241382052021);
    node[54] = node_54(data)*(-0.5268804046279002);
    node[55] = node_55(data)*(-0.6913493874321364);
    node[56] = node_56(data)*(-0.7455620304464766);
    node[57] = node_57(data)*(-1.5991197224661218);
    node[58] = node_58(data)*(-13.138776638566654);
    node[59] = node_59(data)*(-0.5579614551504839);
    node[60] = node_60(data)*(-6.344990635240148);
    node[61] = node_61(data)*(13.409820649322775);
    node[62] = node_62(data)*(-2.8772132192799975);
    node[63] = node_63(data)*(-1.8124448592094815);
    node[64] = node_64(data)*(-0.42337990813201076);
    node[65] = node_65(data)*(-3.300103528463256);
    node[66] = node_66(data)*(-5.520147303379462);
    node[67] = node_67(data)*(-0.5539604342050876);
    node[68] = node_68(data)*(-2.3563470894175405);
    node[69] = node_69(data)*(-12.02419989552826);
    node[70] = node_70(data)*(-0.6130816983970719);
    node[71] = node_71(data)*(-4.587639440416428);
    node[72] = node_72(data)*(2.850926520114336);
    node[73] = node_73(data)*(-0.7807634226238899);
    node[74] = node_74(data)*(15.168210938116514);
    node[75] = node_75(data)*(4.072138700295583);
    node[76] = node_76(data)*(-1.7194309547783215);
    node[77] = node_77(data)*(-8.522669327558422);
    node[78] = node_78(data)*(-0.5738623631995036);
    node[79] = node_79(data)*(-0.9529472275793816);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_47(data){
   var Threshold   = -12.279423422093384
    // Node 51    -3.128967790577465
    // Node 52    -5.79561733486354
    // Node 53    10.742465106822499
    // Node 54    -2.989787876868225
    // Node 55    10.147531288736298
    // Node 56    -11.019821857560617
    // Node 57    -2.61962166045345
    // Node 58    7.4846547785684825
    // Node 59    9.752969859910133
    // Node 60    14.190465041540692
    // Node 61    -20.060765079362664
    // Node 62    3.3219778789732217
    // Node 63    -10.71488647276144
    // Node 64    -2.100410718474177
    // Node 65    -1.8920321731452512
    // Node 66    12.42257835458576
    // Node 67    1.3488460750199491
    // Node 68    -3.0900834615092627
    // Node 69    -2.176009992113872
    // Node 70    3.7960196525620002
    // Node 71    -22.88442927827797
    // Node 72    -3.8109335966307754
    // Node 73    -20.74732022612142
    // Node 74    -2.1713776798765556
    // Node 75    -3.684100287814181
    // Node 76    -15.08417570446939
    // Node 77    15.27023287543348
    // Node 78    4.318431209488671
    // Node 79    -24.359573864084563
    var node = [];
    node[51] = node_51(data)*(-3.128967790577465);
    node[52] = node_52(data)*(-5.79561733486354);
    node[53] = node_53(data)*(10.742465106822499);
    node[54] = node_54(data)*(-2.989787876868225);
    node[55] = node_55(data)*(10.147531288736298);
    node[56] = node_56(data)*(-11.019821857560617);
    node[57] = node_57(data)*(-2.61962166045345);
    node[58] = node_58(data)*(7.4846547785684825);
    node[59] = node_59(data)*(9.752969859910133);
    node[60] = node_60(data)*(14.190465041540692);
    node[61] = node_61(data)*(-20.060765079362664);
    node[62] = node_62(data)*(3.3219778789732217);
    node[63] = node_63(data)*(-10.71488647276144);
    node[64] = node_64(data)*(-2.100410718474177);
    node[65] = node_65(data)*(-1.8920321731452512);
    node[66] = node_66(data)*(12.42257835458576);
    node[67] = node_67(data)*(1.3488460750199491);
    node[68] = node_68(data)*(-3.0900834615092627);
    node[69] = node_69(data)*(-2.176009992113872);
    node[70] = node_70(data)*(3.7960196525620002);
    node[71] = node_71(data)*(-22.88442927827797);
    node[72] = node_72(data)*(-3.8109335966307754);
    node[73] = node_73(data)*(-20.74732022612142);
    node[74] = node_74(data)*(-2.1713776798765556);
    node[75] = node_75(data)*(-3.684100287814181);
    node[76] = node_76(data)*(-15.08417570446939);
    node[77] = node_77(data)*(15.27023287543348);
    node[78] = node_78(data)*(4.318431209488671);
    node[79] = node_79(data)*(-24.359573864084563);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_48(data){
    var Threshold   = -4.108894640500414
    // Node 51    -2.5006077791248353
    // Node 52    -0.8184657419681848
    // Node 53    11.08516756259542
    // Node 54    -0.5006168570077606
    // Node 55    -0.6941730827277706
    // Node 56    -1.1742962549013343
    // Node 57    -1.4000947844708613
    // Node 58    -1.0040390537278991
    // Node 59    -0.5334087875186868
    // Node 60    1.7420785039493278
    // Node 61    5.08806662964567
    // Node 62    -1.2136213561640592
    // Node 63    -0.9759513714823218
    // Node 64    -0.41414118052684235
    // Node 65    -1.106536858351388
    // Node 66    -2.9693530948035947
    // Node 67    1.843416683849621
    // Node 68    -4.1345149123392035
    // Node 69    2.5920024399440873
    // Node 70    -0.8598449629647774
    // Node 71    -2.160678062030695
    // Node 72    -2.671216164766386
    // Node 73    0.5596403518387634
    // Node 74    0.7679591701164541
    // Node 75    -0.7007636373610779
    // Node 76    -14.026623518326284
    // Node 77    -0.9113391960431922
    // Node 78    -6.33445623408729
    // Node 79    -0.8792170924026353
    var node = [];
    node[51] = node_51(data)*(-2.5006077791248353);
    node[52] = node_52(data)*(-0.8184657419681848);
    node[53] = node_53(data)*(11.08516756259542);
    node[54] = node_54(data)*(-0.5006168570077606);
    node[55] = node_55(data)*(-0.6941730827277706);
    node[56] = node_56(data)*(-1.1742962549013343);
    node[57] = node_57(data)*(-1.4000947844708613);
    node[58] = node_58(data)*(-1.0040390537278991);
    node[59] = node_59(data)*(-0.5334087875186868);
    node[60] = node_60(data)*(1.7420785039493278);
    node[61] = node_61(data)*(5.08806662964567);
    node[62] = node_62(data)*(-1.2136213561640592);
    node[63] = node_63(data)*(-0.9759513714823218);
    node[64] = node_64(data)*(-0.41414118052684235);
    node[65] = node_65(data)*(-1.106536858351388);
    node[66] = node_66(data)*(-2.9693530948035947);
    node[67] = node_67(data)*(1.843416683849621);
    node[68] = node_68(data)*(-4.1345149123392035);
    node[69] = node_69(data)*(2.5920024399440873);
    node[70] = node_70(data)*(-0.8598449629647774);
    node[71] = node_71(data)*(-2.160678062030695);
    node[72] = node_72(data)*(-2.671216164766386);
    node[73] = node_73(data)*(0.5596403518387634);
    node[74] = node_74(data)*(0.7679591701164541);
    node[75] = node_75(data)*(-0.7007636373610779);
    node[76] = node_76(data)*(-14.026623518326284);
    node[77] = node_77(data)*(-0.9113391960431922);
    node[78] = node_78(data)*(-6.33445623408729);
    node[79] = node_79(data)*(-0.8792170924026353);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_49(data){
    var Threshold  =  -13.122113563811919
    // Node 51    0.986078497357399
    // Node 52    -4.503639268752051
    // Node 53    -1.5413048721940183
    // Node 54    -0.5096930259948932
    // Node 55    -3.18783308198701
    // Node 56    -1.8263418625444738
    // Node 57    9.28380151829469
    // Node 58    -4.885229123169778
    // Node 59    -1.970256449983712
    // Node 60    -9.025247763014177
    // Node 61    0.8869850527499913
    // Node 62    -8.219536946041805
    // Node 63    -9.891958343551185
    // Node 64    -0.4845811842094141
    // Node 65    -1.6665829320252383
    // Node 66    2.4055031004365617
    // Node 67    -6.3480878744290266
    // Node 68    -4.397990824025366
    // Node 69    -1.583009079118989
    // Node 70    -1.333623862595689
    // Node 71    -1.448140284913942
    // Node 72    2.0599844520951605
    // Node 73    8.539397497736232
    // Node 74    -2.1064060876497925
    // Node 75    -0.3225404199285686
    // Node 76    -4.610045478031613
    // Node 77    3.260849558025959
    // Node 78    -1.0548695448581233
    // Node 79    -2.9645508199149044
    var node = [];
    node[51] = node_51(data)*(0.986078497357399);
    node[52] = node_52(data)*(-4.503639268752051);
    node[53] = node_53(data)*(-1.5413048721940183);
    node[54] = node_54(data)*(-0.5096930259948932);
    node[55] = node_55(data)*(-3.18783308198701);
    node[56] = node_56(data)*(-1.8263418625444738);
    node[57] = node_57(data)*(9.28380151829469);
    node[58] = node_58(data)*(-4.885229123169778);
    node[59] = node_59(data)*(-1.970256449983712);
    node[60] = node_60(data)*(-9.025247763014177);
    node[61] = node_61(data)*(0.8869850527499913);
    node[62] = node_62(data)*(-8.219536946041805);
    node[63] = node_63(data)*(-9.891958343551185);
    node[64] = node_64(data)*(-0.4845811842094141);
    node[65] = node_65(data)*(-1.6665829320252383);
    node[66] = node_66(data)*(2.4055031004365617);
    node[67] = node_67(data)*(-6.3480878744290266);
    node[68] = node_68(data)*(-4.397990824025366);
    node[69] = node_69(data)*(-1.583009079118989);
    node[70] = node_70(data)*(-1.333623862595689);
    node[71] = node_71(data)*(-1.448140284913942);
    node[72] = node_72(data)*(2.0599844520951605);
    node[73] = node_73(data)*(8.539397497736232);
    node[74] = node_74(data)*(-2.1064060876497925);
    node[75] = node_75(data)*(-0.3225404199285686);
    node[76] = node_76(data)*(-4.610045478031613);
    node[77] = node_77(data)*(3.260849558025959);
    node[78] = node_78(data)*(-1.0548695448581233);
    node[79] = node_79(data)*(-2.9645508199149044);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_50(data){
    var Threshold  =  -3.769171833591086
    // Node 51    -0.7018341969292411
    // Node 52    -0.661124544440264
    // Node 53    12.16780091992812
    // Node 54    -0.77095000423237
    // Node 55    -1.4085739613280033
    // Node 56    -2.6814775200286873
    // Node 57    -6.038102855033233
    // Node 58    -1.3431033813266489
    // Node 59    -12.473824246473287
    // Node 60    -2.5338715568954657
    // Node 61    -0.8821947700709287
    // Node 62    -0.9684165409763005
    // Node 63    -8.784389015892724
    // Node 64    -0.531993524420898
    // Node 65    1.7771213418492768
    // Node 66    -12.159226259345733
    // Node 67    6.4080557549381005
    // Node 68    -0.5467253987297966
    // Node 69    -0.6994954375108061
    // Node 70    -8.302604503193946
    // Node 71    -6.416054884690775
    // Node 72    -1.637221055375627
    // Node 73    -1.558243748189684
    // Node 74    -0.6790837626063975
    // Node 75    4.097510928576303
    // Node 76    -1.920198557460787
    // Node 77    -2.006481861195859
    // Node 78    -8.45226586077244
    // Node 79    7.248980979422191
    var node = [];
    node[51] = node_51(data)*(-0.7018341969292411);
    node[52] = node_52(data)*(-0.661124544440264);
    node[53] = node_53(data)*(12.16780091992812);
    node[54] = node_54(data)*(-0.77095000423237);
    node[55] = node_55(data)*(-1.4085739613280033);
    node[56] = node_56(data)*(-2.6814775200286873);
    node[57] = node_57(data)*(-6.038102855033233);
    node[58] = node_58(data)*(-1.3431033813266489);
    node[59] = node_59(data)*(-12.473824246473287);
    node[60] = node_60(data)*(-2.5338715568954657);
    node[61] = node_61(data)*(-0.8821947700709287);
    node[62] = node_62(data)*(-0.9684165409763005);
    node[63] = node_63(data)*(-8.784389015892724);
    node[64] = node_64(data)*(-0.531993524420898);
    node[65] = node_65(data)*(1.7771213418492768);
    node[66] = node_66(data)*(-12.159226259345733);
    node[67] = node_67(data)*(6.4080557549381005);
    node[68] = node_68(data)*(-0.5467253987297966);
    node[69] = node_69(data)*(-0.6994954375108061);
    node[70] = node_70(data)*(-8.302604503193946);
    node[71] = node_71(data)*(-6.416054884690775);
    node[72] = node_72(data)*(-1.637221055375627);
    node[73] = node_73(data)*(-1.558243748189684);
    node[74] = node_74(data)*(-0.6790837626063975);
    node[75] = node_75(data)*(4.097510928576303);
    node[76] = node_76(data)*(-1.920198557460787);
    node[77] = node_77(data)*(-2.006481861195859);
    node[78] = node_78(data)*(-8.45226586077244);
    node[79] = node_79(data)*(7.248980979422191);
        var sum,sum1,sum2;
        sum1 = node[51]+node[52]+node[53]+node[54]+node[55]+node[56]+node[57]+node[58]+node[59]+node[60]+node[61]+node[62]+node[63]+node[64]+node[65]+node[66]+node[67]+node[68]+node[69]+node[70];
        sum2 = sum1+node[71]+node[72]+node[73]+node[74]+node[75]+node[76]+node[77]+node[78]+node[79]
        sum = activate(sum2)
        if(sum > Threshold){
            return 0;
        }else{
            return 1;
        }  
}

function node_51(data){
    var Threshold = 7.014854255287475
    // Attrib ï»¿latitude    -4.730260860582049
    // Attrib longitude    -1.2424156595188605
    // Attrib brightness    -10.266379718895474
    // Attrib scan    -5.018806057657536
    // Attrib track    -5.741621337199991
    // Attrib bright_t31    24.039515642564563
    // Attrib frp    21.138099532796975
    var latitude = data.latitude * (-4.730260860582049);
    var longitude= data.longitude * (-1.2424156595188605);
    var brightness  = data.brightness * (-10.266379718895474);
    var scan = data.scan * (-5.018806057657536);
    var track = data.track * (-5.741621337199991);
    var bright_t31 = data.bright_t31 * (24.039515642564563);
    var frp = data.frp * (21.138099532796975);
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
     sum = activate(sum)
     if(sum > Threshold){
         return 0;
     }else{
         return 1;
     }  
}

function node_52(data){
    var Threshold  =  2.6303090543921686
    // Attrib ï»¿latitude    1.6449299964878592
    // Attrib longitude    -0.5690145051808774
    // Attrib brightness    38.3202136659834
    // Attrib scan    -2.809308819976264
    // Attrib track    -2.6973327345591267
    // Attrib bright_t31    10.654430974863885
    // Attrib frp    0.2501820753899223
    var latitude = data.latitude *(1.6449299964878592);
    var longitude = data.longitude * (-0.5690145051808774);
    var brightness = data.brightness * (38.3202136659834);
    var scan = data.scan * (-2.809308819976264);
    var track = data.track * (-2.6973327345591267);
    var bright_t31 = data.bright_t31 * (10.654430974863885)
    var frp = data.frp * (0.2501820753899223)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_53(data){
    var Threshold  =  -0.9142298626199236
    // Attrib ï»¿latitude    4.044371410057146
    // Attrib longitude    31.799411637358496
    // Attrib brightness    5.812662534328804
    // Attrib scan    1.325568533694445
    // Attrib track    1.3580666979606866
    // Attrib bright_t31    -10.825437998621165
    // Attrib frp    2.559796671690744
    var latitude = data.latitude *(4.044371410057146);
    var longitude = data.longitude * (31.799411637358496);
    var brightness = data.brightness * (5.812662534328804);
    var scan = data.scan * (1.325568533694445);
    var track = data.track * (1.3580666979606866);
    var bright_t31 = data.bright_t31 * (-10.825437998621165)
    var frp = data.frp * (2.559796671690744)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_54(data){
    var Threshold  =  -2.290059010799267
    // Attrib ï»¿latitude    1.8511866510227042
    // Attrib longitude    -2.0734316058090365
    // Attrib brightness    12.67941942264675
    // Attrib scan    2.377436521216185
    // Attrib track    2.431044761439386
    // Attrib bright_t31    -4.397599128791713
    // Attrib frp    1.8285000285060722
    var latitude = data.latitude *(1.8511866510227042);
    var longitude = data.longitude * (-2.0734316058090365);
    var brightness = data.brightness * (12.67941942264675);
    var scan = data.scan * (2.377436521216185);
    var track = data.track * (2.431044761439386);
    var bright_t31 = data.bright_t31 * (-4.397599128791713)
    var frp = data.frp * (1.8285000285060722)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_55(data){
    var Threshold  =  3.515974728006101
    // Attrib ï»¿latitude    -8.473332911557016
    // Attrib longitude    -8.366651968055736
    // Attrib brightness    26.25273824505416
    // Attrib scan    -3.280337474398192
    // Attrib track    -3.4229501973250906
    // Attrib bright_t31    34.97767220810353
    // Attrib frp    14.101905181952844
    var latitude = data.latitude *(-8.473332911557016);
    var longitude = data.longitude * (-8.366651968055736);
    var brightness = data.brightness * (26.25273824505416);
    var scan = data.scan * (-3.280337474398192);
    var track = data.track * (-3.4229501973250906);
    var bright_t31 = data.bright_t31 * (34.97767220810353)
    var frp = data.frp * (14.101905181952844)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_56(data){
    var Threshold  =  3.248345238201117
    // Attrib ï»¿latitude    -5.177615974220083
    // Attrib longitude    1.6572891801014917
    // Attrib brightness    15.732255037091733
    // Attrib scan    -2.9067162044220956
    // Attrib track    -2.626552611313777
    // Attrib bright_t31    -15.636921311685962
    // Attrib frp    19.23255826371575
    var latitude = data.latitude *(-5.177615974220083);
    var longitude = data.longitude * (1.6572891801014917);
    var brightness = data.brightness * (15.732255037091733);
    var scan = data.scan * (-2.9067162044220956);
    var track = data.track * (-2.626552611313777);
    var bright_t31 = data.bright_t31 * (-15.636921311685962)
    var frp = data.frp * (19.23255826371575)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    } 
}

function node_57(data){
    var Threshold  =  2.0654734059639495
    // Attrib ï»¿latitude    -4.824693967281431
    // Attrib longitude    -17.107050123802907
    // Attrib brightness    33.16878404024094
    // Attrib scan    -2.2322330857869646
    // Attrib track    -1.9193248603570394
    // Attrib bright_t31    -29.907569490291575
    // Attrib frp    26.24634148543681
    var latitude = data.latitude *(-4.824693967281431);
    var longitude = data.longitude * (-17.107050123802907);
    var brightness = data.brightness * (33.16878404024094);
    var scan = data.scan * (-2.2322330857869646);
    var track = data.track * (-1.9193248603570394);
    var bright_t31 = data.bright_t31 * (-29.907569490291575)
    var frp = data.frp * (26.24634148543681)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_58(data){
    var Threshold  =  -7.906762652924175
    // Attrib ï»¿latitude    6.023415631553911
    // Attrib longitude    -41.595604236439044
    // Attrib brightness    1.8012742481713595
    // Attrib scan    7.257630407669783
    // Attrib track    7.364320024086533
    // Attrib bright_t31    -3.3374676485078143
    // Attrib frp    6.204244870573891
    var latitude = data.latitude *(6.023415631553911);
    var longitude = data.longitude * (-41.595604236439044);
    var brightness = data.brightness * (1.8012742481713595);
    var scan = data.scan * (7.257630407669783);
    var track = data.track * (7.364320024086533);
    var bright_t31 = data.bright_t31 * (-3.3374676485078143)
    var frp = data.frp * (6.204244870573891)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }  
}

function node_59(data){
    var Threshold = 0.005227402153280613
    // Attrib ï»¿latitude    -5.70478804965784
    // Attrib longitude    1.51118250071719
    // Attrib brightness    22.320938871453823
    // Attrib scan    -0.03171213872868263
    // Attrib track    -0.15690506506125207
    // Attrib bright_t31    22.698699309993348
    // Attrib frp    -1.0115906871174762
    var latitude = data.latitude *(-5.70478804965784);
    var longitude = data.longitude * (1.51118250071719);
    var brightness = data.brightness * ( 22.320938871453823);
    var scan = data.scan * (-0.03171213872868263);
    var track = data.track * (-0.15690506506125207);
    var bright_t31 = data.bright_t31 * (22.698699309993348)
    var frp = data.frp * (-1.0115906871174762)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }  
}

function node_60(data){
    var Threshold  =  -21.66578298799146
    // Attrib ï»¿latitude    16.438659550708188
    // Attrib longitude    0.015605798324442453
    // Attrib brightness    5.704434576706959
    // Attrib scan    9.945197360907859
    // Attrib track    10.009933425070036
    // Attrib bright_t31    10.020044605488545
    // Attrib frp    -69.98223706058033
    var latitude = data.latitude *(-4.730260860582049);
    var longitude = data.longitude * (16.438659550708188);
    var brightness = data.brightness * (5.704434576706959);
    var scan = data.scan * (9.945197360907859);
    var track = data.track * (10.009933425070036);
    var bright_t31 = data.bright_t31 * (10.020044605488545)
    var frp = data.frp * (-69.98223706058033)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_61(data){
    var Threshold  =  30.62340971348334
    // Attrib ï»¿latitude    -17.006934317029827
    // Attrib longitude    0.39012365895238066
    // Attrib brightness    -25.33744034139976
    // Attrib scan    -16.56340109597984
    // Attrib track    -16.542368227437077
    // Attrib bright_t31    30.534188247295567
    // Attrib frp    86.58782718577685
    var latitude = data.latitude *(-17.006934317029827);
    var longitude = data.longitude * (0.39012365895238066);
    var brightness = data.brightness * (-25.33744034139976);
    var scan = data.scan * (-16.56340109597984);
    var track = data.track * (-16.542368227437077);
    var bright_t31 = data.bright_t31 * (30.534188247295567)
    var frp = data.frp * (86.58782718577685)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }  
}

function node_62(data){
    var Threshold  =  3.104474239023663
    // Attrib ï»¿latitude    -4.454752802806393
    // Attrib longitude    -7.658454547954746
    // Attrib brightness    7.583249447265163
    // Attrib scan    -2.285913324670827
    // Attrib track    -2.3712288647382906
    // Attrib bright_t31    12.363656415479374
    // Attrib frp    11.253279251285718
    var latitude = data.latitude *(-4.454752802806393);
    var longitude = data.longitude * (-7.658454547954746);
    var brightness = data.brightness * (7.583249447265163);
    var scan = data.scan * (-2.285913324670827);
    var track = data.track * (-2.3712288647382906);
    var bright_t31 = data.bright_t31 * (12.363656415479374)
    var frp = data.frp * (11.253279251285718)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    } 
}

function node_63(data){
    var Threshold  =  -11.60720724958893
    // Attrib ï»¿latitude    5.965452128484002
    // Attrib longitude    8.845420840188705
    // Attrib brightness    -21.335207070272176
    // Attrib scan    8.995271694466942
    // Attrib track    9.577454368526642
    // Attrib bright_t31    -35.329806700303095
    // Attrib frp    -14.719738194715083
    var latitude = data.latitude *(5.965452128484002);
    var longitude = data.longitude * (8.845420840188705);
    var brightness = data.brightness * (-21.335207070272176);
    var scan = data.scan * (8.995271694466942);
    var track = data.track * (9.577454368526642);
    var bright_t31 = data.bright_t31 * (-35.329806700303095)
    var frp = data.frp * (-14.719738194715083)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_64(data){
    var Threshold  =  -3.0913804486975454
    // Attrib ï»¿latitude    2.4982140036832883
    // Attrib longitude    -3.1384016745919587
    // Attrib brightness    14.042564748723697
    // Attrib scan    3.472481243547863
    // Attrib track    3.4427248260769194
    // Attrib bright_t31    -8.87541332039951
    // Attrib frp    2.4270598897777393
    var latitude = data.latitude *(2.4982140036832883);
    var longitude = data.longitude * (-3.1384016745919587);
    var brightness = data.brightness * (14.042564748723697);
    var scan = data.scan * (3.472481243547863);
    var track = data.track * (3.4427248260769194);
    var bright_t31 = data.bright_t31 * (-8.87541332039951)
    var frp = data.frp * (2.4270598897777393)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_65(data){
    var Threshold  =  -2.780712237237594
    // Attrib ï»¿latitude    0.23697939114760663
    // Attrib longitude    -2.6786135274327836
    // Attrib brightness    19.902203216046082
    // Attrib scan    2.050535330820259
    // Attrib track    2.0819912661756446
    // Attrib bright_t31    -48.01012930786521
    // Attrib frp    7.7380082537105634
    var latitude = data.latitude *(0.23697939114760663);
    var longitude = data.longitude * (-2.6786135274327836);
    var brightness = data.brightness * (19.902203216046082);
    var scan = data.scan * (2.050535330820259);
    var track = data.track * (2.0819912661756446);
    var bright_t31 = data.bright_t31 * (-48.01012930786521)
    var frp = data.frp * (7.7380082537105634)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_66(data){
    var Threshold  =  3.8794618223333397
    // Attrib ï»¿latitude    -4.177333895812951
    // Attrib longitude    -0.06386673755907031
    // Attrib brightness    -24.56166110334421
    // Attrib scan    -1.3511474743648206
    // Attrib track    -2.697060951028806
    // Attrib bright_t31    60.14468306029832
    // Attrib frp    -13.096490246330841
    var latitude = data.latitude *(-4.177333895812951);
    var longitude = data.longitude * (-0.06386673755907031);
    var brightness = data.brightness * (-24.56166110334421);
    var scan = data.scan * (-1.3511474743648206);
    var track = data.track * (-2.697060951028806);
    var bright_t31 = data.bright_t31 * (60.14468306029832)
    var frp = data.frp * (-13.096490246330841)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    } 
}

function node_67(data){
    var Threshold  =  -12.099009943974057
    // Attrib ï»¿latitude    15.61806658117208
    // Attrib longitude    -0.11182808979684823
    // Attrib brightness    -1.9956208336950472
    // Attrib scan    7.99256888488189
    // Attrib track    8.925481601858351
    // Attrib bright_t31    6.070450142715338
    // Attrib frp    -49.594332155699874
    var latitude = data.latitude *(15.61806658117208);
    var longitude = data.longitude * (-0.11182808979684823);
    var brightness = data.brightness * (-1.9956208336950472);
    var scan = data.scan * (7.99256888488189);
    var track = data.track * (8.925481601858351);
    var bright_t31 = data.bright_t31 * (6.070450142715338)
    var frp = data.frp * (-49.594332155699874)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_68(data){
    var Threshold  =  4.191769406265587
    // Attrib ï»¿latitude    -0.8789578508148778
    // Attrib longitude    -2.0410809214703205
    // Attrib brightness    -22.304200897305083
    // Attrib scan    -1.9241590652359317
    // Attrib track    -2.2686885974605713
    // Attrib bright_t31    13.926115615425246
    // Attrib frp    19.506920736026746
    var latitude = data.latitude *(-0.8789578508148778);
    var longitude = data.longitude * (-2.0410809214703205);
    var brightness = data.brightness * (-22.304200897305083);
    var scan = data.scan * (-1.9241590652359317);
    var track = data.track * (-2.2686885974605713);
    var bright_t31 = data.bright_t31 * (13.926115615425246)
    var frp = data.frp * (19.506920736026746)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_69(data){
    var Threshold  =  -13.646129260486152
    // Attrib ï»¿latitude    15.919209926274013
    // Attrib longitude    11.505414280915625
    // Attrib brightness    -40.06685408327457
    // Attrib scan    10.365656356620702
    // Attrib track    10.7508378846025
    // Attrib bright_t31    -8.102073876610948
    // Attrib frp    -15.019535509851371
    var latitude = data.latitude *(15.919209926274013);
    var longitude = data.longitude * (11.505414280915625);
    var brightness = data.brightness * (-40.06685408327457);
    var scan = data.scan * (10.365656356620702);
    var track = data.track * (10.7508378846025);
    var bright_t31 = data.bright_t31 * (-8.102073876610948)
    var frp = data.frp * (-15.019535509851371)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_70(data){
    var Threshold  =  1.225511723398482
    // Attrib ï»¿latitude    -3.0729146910607237
    // Attrib longitude    10.80549672534777
    // Attrib brightness    17.41530365574811
    // Attrib scan    -0.9246661972044797
    // Attrib track    -0.9463255632857313
    // Attrib bright_t31    3.8821575215004875
    // Attrib frp    9.271564684060875
    var latitude = data.latitude *(-3.0729146910607237);
    var longitude = data.longitude * (10.80549672534777);
    var brightness = data.brightness * (17.41530365574811);
    var scan = data.scan * (-0.9246661972044797);
    var track = data.track * (-0.9463255632857313);
    var bright_t31 = data.bright_t31 * (3.8821575215004875)
    var frp = data.frp * (9.271564684060875)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    } 
}

function node_71(data){
    var Threshold  =  -11.291924694323583
    // Attrib ï»¿latitude    2.4082952360544905
    // Attrib longitude    2.1582750813511202
    // Attrib brightness    -32.68778755946685
    // Attrib scan    10.242442961264802
    // Attrib track    10.989258583003704
    // Attrib bright_t31    -55.029363791510455
    // Attrib frp    -5.140399582299592
    var latitude = data.latitude *(2.4082952360544905);
    var longitude = data.longitude * (2.1582750813511202);
    var brightness = data.brightness * (-32.68778755946685);
    var scan = data.scan * (10.242442961264802);
    var track = data.track * (10.989258583003704);
    var bright_t31 = data.bright_t31 * (-55.029363791510455)
    var frp = data.frp * (-5.140399582299592)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_72(data){
    var Threshold  =  -2.8070193062391375
    // Attrib ï»¿latitude    2.8374776576147585
    // Attrib longitude    -12.192476110138397
    // Attrib brightness    -2.51429224467518
    // Attrib scan    3.7641744842549483
    // Attrib track    3.418753920539262
    // Attrib bright_t31    -38.50747799190716
    // Attrib frp    15.40258678892817
    var latitude = data.latitude *(2.8374776576147585);
    var longitude = data.longitude * (-12.192476110138397);
    var brightness = data.brightness * (-2.51429224467518);
    var scan = data.scan * (3.7641744842549483);
    var track = data.track * (3.418753920539262);
    var bright_t31 = data.bright_t31 * (-38.50747799190716)
    var frp = data.frp * (15.40258678892817)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_73(data){
    var Threshold  =  15.664813933466974
    // Attrib ï»¿latitude    -10.354812180310432
    // Attrib longitude    2.251140155169961
    // Attrib brightness    -19.26897899245415
    // Attrib scan    -9.54515442105534
    // Attrib track    -9.970951230410098
    // Attrib bright_t31    56.245003695252144
    // Attrib frp    30.095828863492056
    var latitude = data.latitude *(-10.354812180310432);
    var longitude = data.longitude * (2.251140155169961);
    var brightness = data.brightness * (-19.26897899245415);
    var scan = data.scan * (-9.54515442105534);
    var track = data.track * (-9.970951230410098);
    var bright_t31 = data.bright_t31 * (56.245003695252144)
    var frp = data.frp * (30.095828863492056)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }  
}

function node_74(data){
    var Threshold  =  -12.676302227062965
    // Attrib ï»¿latitude    14.043386701784078
    // Attrib longitude    12.312727790795432
    // Attrib brightness    -34.2219008349121
    // Attrib scan    9.865905403562495
    // Attrib track    10.211650537877487
    // Attrib bright_t31    -15.520401157727985
    // Attrib frp    -16.268975823512136
    var latitude = data.latitude *(14.043386701784078);
    var longitude = data.longitude * (12.312727790795432);
    var brightness = data.brightness * (-34.2219008349121);
    var scan = data.scan * (9.865905403562495);
    var track = data.track * (10.211650537877487);
    var bright_t31 = data.bright_t31 * (-15.520401157727985)
    var frp = data.frp * (-16.268975823512136)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    } 
}

function node_75(data){
    var Threshold =   -4.076766441614964
    // Attrib ï»¿latitude    3.6341206108510766
    // Attrib longitude    6.420341296741633
    // Attrib brightness    -7.3813224302808305
    // Attrib scan    3.7307894543125757
    // Attrib track    4.066623077149515
    // Attrib bright_t31    -28.920860094002833
    // Attrib frp    1.1280257443598511
    var latitude = data.latitude *(3.6341206108510766);
    var longitude = data.longitude * (6.420341296741633);
    var brightness = data.brightness * (-7.3813224302808305);
    var scan = data.scan * (3.7307894543125757);
    var track = data.track * (4.066623077149515);
    var bright_t31 = data.bright_t31 * (-28.920860094002833)
    var frp = data.frp * (1.1280257443598511)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_76(data){
    var Threshold  =  -3.669447071025989
    // Attrib ï»¿latitude    7.6867045151044735
    // Attrib longitude    14.881962933191007
    // Attrib brightness    22.131620652329776
    // Attrib scan    1.854785436342553
    // Attrib track    2.437235587463394
    // Attrib bright_t31    14.328378826477893
    // Attrib frp    -35.75608126648506
    var latitude = data.latitude *(7.6867045151044735);
    var longitude = data.longitude * (14.881962933191007);
    var brightness = data.brightness * (22.131620652329776);
    var scan = data.scan * (1.854785436342553);
    var track = data.track * (2.437235587463394);
    var bright_t31 = data.bright_t31 * (14.328378826477893)
    var frp = data.frp * (-35.75608126648506)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    } 
}

function node_77(data){
    var Threshold =   3.38338600946678
    // Attrib ï»¿latitude    -5.675052796598328
    // Attrib longitude    35.03592247433167
    // Attrib brightness    10.201402053530913
    // Attrib scan    -2.438484229744572
    // Attrib track    -2.720082530357011
    // Attrib bright_t31    -21.55587115909134
    // Attrib frp    -1.7683950778254118
    var latitude = data.latitude *(-5.675052796598328);
    var longitude = data.longitude * (35.03592247433167);
    var brightness = data.brightness * (10.201402053530913);
    var scan = data.scan * (-2.438484229744572);
    var track = data.track * (-2.720082530357011);
    var bright_t31 = data.bright_t31 * (-21.55587115909134)
    var frp = data.frp * (-1.7683950778254118)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_78(data){
    var Threshold  =  -3.2178896960724663
    // Attrib ï»¿latitude    2.6337389489690977
    // Attrib longitude    23.822544438110196
    // Attrib brightness    5.6004203402610795
    // Attrib scan    3.5044603853580067
    // Attrib track    3.416715486115267
    // Attrib bright_t31    0.2812909007199721
    // Attrib frp    2.9960342753419438
    var latitude = data.latitude *(2.6337389489690977);
    var longitude = data.longitude * (23.822544438110196);
    var brightness = data.brightness * (5.6004203402610795);
    var scan = data.scan * (3.5044603853580067);
    var track = data.track * (3.416715486115267);
    var bright_t31 = data.bright_t31 * (0.2812909007199721)
    var frp = data.frp * (2.9960342753419438)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}

function node_79(data){
    var Threshold  =  -2.4734871095655673
    // Attrib ï»¿latitude    3.2714158601613432
    // Attrib longitude    2.311304043809776
    // Attrib brightness    32.574219385803495
    // Attrib scan    1.7703257572500888
    // Attrib track    2.017750859929425
    // Attrib bright_t31    -42.9475542104296
    // Attrib frp    7.52050768963884
    var latitude = data.latitude *(3.2714158601613432);
    var longitude = data.longitude * (2.311304043809776);
    var brightness = data.brightness * (32.574219385803495);
    var scan = data.scan * (1.7703257572500888);
    var track = data.track * (2.017750859929425);
    var bright_t31 = data.bright_t31 * (-42.9475542104296)
    var frp = data.frp * (7.52050768963884)
    var sum = (latitude+longitude+brightness+scan+track+bright_t31+frp)
    sum = activate(sum)
    if(sum > Threshold){
        return 0;
    }else{
        return 1;
    }
}


module.exports.dataa = dataa;
