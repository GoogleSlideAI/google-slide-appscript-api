import { Module } from '@nestjs/common';

import { JarvisKnowledgeBaseService } from './jarvis-knowledge-base.service';

@Module({
  providers: [JarvisKnowledgeBaseService],
})
export class JarvisKnowledgeBaseModule {}
