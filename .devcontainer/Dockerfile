FROM ubuntu:jammy
RUN apt-get update && apt-get install -y sudo curl git unzip fonts-powerline locales
RUN apt install zsh -y
RUN chsh -s $(which zsh)
RUN sh -c "$(curl -fsSL https://install.ohmyz.sh)"
RUN sed -i '/^ZSH_THEME/c\ZSH_THEME="agnoster"' ~/.zshrc
RUN locale-gen en_US.UTF-8
RUN zsh -c 'git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting'
RUN zsh -c 'git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions'
RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.27"
