$(function(){
	console.log("Main init called");
	init();
});

function InitFilesRankBrd() {
	// initializing files and rank board...

	for(var i=0;i<BRD_SQ_NUM;i++){
		FilesBrd[i] = SQUARES.OFFBOARD;
		RanksBrd[i] = SQUARES.OFFBOARD;
	}

	for(var rank=RANKS.RANK_1;rank <= RANKS.RANK_8 ; rank++){
		for(var file=FILES.FILE_A; file < FILES.FILE_H; file++){
			pos = FR2SQ(file, rank);
			FilesBrd[pos] = file;
			RanksBrd[pos] = rank;
		}
	}

}

function init(){
	console.log("init() Called");
}