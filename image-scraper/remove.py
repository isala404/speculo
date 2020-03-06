file = open('new_eval_url.txt', 'a')

data = [line.rstrip('\n') for line in open('eval_urls.txt')]

data.pop(0)
data.pop(0)

for line in data:
    line = line.split('\t')
    line.pop(1)
    line.pop(3)
    file.write('\t'.join(line) + '\n')