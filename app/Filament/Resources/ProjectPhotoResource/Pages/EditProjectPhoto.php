<?php

namespace App\Filament\Resources\ProjectPhotoResource\Pages;

use App\Filament\Resources\ProjectPhotoResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProjectPhoto extends EditRecord
{
    protected static string $resource = ProjectPhotoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
