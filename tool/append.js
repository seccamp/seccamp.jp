const fs = require('fs');
const readline = require('readline');

console.log(process.argv[2]);
if(process.argv.length < 3){
	console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <path_to_json>`);
	process.exit();
}
var data_list = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
console.log(data_list);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function InputData(){
	rl.question('URL:', (url) => {
		rl.question('Title:', (title) => {
			rl.question('Date:', (date) => {
				rl.question('Author:', (author) => {
					rl.question('Twitter:', (twitter) => {
						var data = {
							"url": url,
							"title": title,
							"date": date,
							"author": author,
							"twitter": twitter,
						};
						console.log(data);
						rl.question('Is it ok? (Y/n)', (ans) => {
							if(["y", "Y", "Yes", "yes", ""].includes(ans)){
								if (url !== '') {
									data_list.push(data);
								}
								data_list.sort((a, b) => {
									return ((new Date(a["date"])).getTime() - (new Date(b["date"])).getTime());
								});
								fs.writeFileSync(process.argv[2], JSON.stringify(data_list, null, 2) + "\n");
								console.log("Saved!");
							} else{
								console.log("Aborted.");
							}
							InputData();
						});
					});
				});
			});
		});
	});
}
InputData();
